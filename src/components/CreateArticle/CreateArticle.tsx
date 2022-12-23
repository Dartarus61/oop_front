import React, { useState, useEffect } from 'react'
import style from './CreateArticle.module.css'
import Dropdown, { Option } from '../Dropdown/Dropdown'
import useInput from '../../hooks/useInput'
import { v4 as uuidv4 } from 'uuid'
import { articleApi } from '../../store/apis/articleService'
import WarningModal from '../WarningModal/WarningModal'
import { chapterApi } from '../../store/apis/chapterService'
import AlertSuccess from '../AlertSuccess/AlertSuccess'

interface IImage {
  link: string
  image: File | null | undefined
}

export interface IArticle {
  pictures: IImage[]
  category: Option[]
  subCategory: Option[]
  title: string
  text: string
}

const CreateArticle = () => {
  const title = useInput('', { empty: false })
  const [category, setCategory] = useState<Option[]>([] as Option[])
  const [subCategory, setSubCategory] = useState<Option[]>([] as Option[])
  const [link, setLink] = useState<string>('')
  const [pictures, setPictures] = useState<IImage[]>([])
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [text, setText] = useState<string>('')
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [createArticle, { isSuccess }] = articleApi.useCreateArticleMutation()

  const { data: chapters } = chapterApi.useGetChaptersQuery()
  const { data: subChapters, refetch } = chapterApi.useGetSubChaptersQuery(
    category && category[0]?.label ? category[0].label : ' '
  )

  useEffect(() => {
    refetch()
  }, [category])

  const handleCategory = (date: Option[]) => {
    setCategory(date)
    setSubCategory([])
  }

  const handleSubCategory = (date: Option[]) => {
    setSubCategory(date)
  }

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleImage = (e: any) => {
    const link = uuidv4()
    setLink(link)
    setPictures([...pictures, { link, image: e?.target?.files[0] }])
  }

  const handleSend = () => {
    const newFormData = new FormData()
    for (let i = 0; i < pictures.length; i++) {
      newFormData.append('file' + i, pictures[i].image || '')
    }
    const links = []
    for (let i = 0; i < pictures.length; i++) {
      links.push(pictures[i].link)
    }
    newFormData.append('links', links.join(','))
    newFormData.append('category', category[0].label)
    newFormData.append('subCategory', subCategory[0].label)
    newFormData.append('title', title.data)
    newFormData.append('text', text)
    createArticle(newFormData)
    setModalOpen(false)
    setText('')
    setSubCategory([])
    setCategory([])
    setPictures([])
    setLink('')
  }

  return (
    <div className={style.container}>
      <div className={style.createMenu}>
        <div className={style.paramsText}>Создание статьи:</div>
        <div className={style.titleContainer}>
          <div className={style.paramsText}>Название статьи:</div>
          <input
            type='text'
            placeholder='Введите название'
            value={title.data}
            onBlur={title.onBlur}
            onChange={title.onChange}
            className={`${style.inputTitle} ${
              title.errorMessage && title.isDirty ? style.inputError : ''
            }`}
          />
          {title.errorMessage && title.isDirty && (
            <div className={style.helperText}>{title.errorMessage}</div>
          )}
        </div>
        <div className={style.dropContainer}>
          <div className={style.paramsRow}>
            <div className={style.paramsText}>Раздел:</div>
            <Dropdown
              isMulti={false}
              isSearchable
              placeHolder='Выберите раздел'
              options={chapters?.map(
                (chapter, index) =>
                  ({
                    value: 'id' + index,
                    label: chapter,
                  } as Option)
              )}
              key={1}
              value={category}
              onChange={handleCategory}
            />
          </div>
          {category[0]?.label && (
            <div className={style.paramsRow}>
              <div className={style.paramsText}>Подраздел:</div>
              <Dropdown
                isMulti={false}
                isSearchable
                placeHolder='Выберите подраздел'
                options={subChapters?.map(
                  (subChapter, index) =>
                    ({
                      value: 'id' + index,
                      label: subChapter,
                    } as Option)
                )}
                key={2}
                value={subCategory}
                onChange={handleSubCategory}
              />
            </div>
          )}
        </div>
        <div className={style.linkContaiener}>
          <div className={style.inputContainer}>
            <label className={style.inputLabel} htmlFor={'uplouder'}>
              Нажмите чтобы выбрать файл
            </label>
            <input
              ref={inputRef}
              type='file'
              name='file'
              id='uplouder'
              onChange={handleImage}
              className={style.addImgBtn}
            />
          </div>

          {link && <div className={style.link}>{link}</div>}
          {link && (
            <div className={style.text}>
              Скопируйте и вставте код в текст, чтобы добавить картику
            </div>
          )}
        </div>
      </div>

      <div className={style.chapterTextContainer}>
        <textarea
          placeholder='Введите текст'
          className={style.chapterMainText}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className={style.submitContainer}>
        <button
          disabled={!title.isValid || !category.length || !subCategory.length}
          className={style.submitBtn}
          onClick={() => handleModalOpen()}
        >
          Опубликовать
        </button>
      </div>
      <WarningModal
        open={modalOpen}
        onClose={handleModalClose}
        onSuccess={handleSend}
      />
      {isSuccess && <AlertSuccess text='Статья успешно создана' />}
    </div>
  )
}

export default CreateArticle
