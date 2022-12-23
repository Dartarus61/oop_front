import React, {useState} from 'react';
import {chapterApi} from "../../store/apis/chapterService";
import Dropdown, {Option} from "../Dropdown/Dropdown";
import general from "../../styles/generalStyles.module.css"
import s from "./AddChapterOrSubChp.module.css"

const AddChapterOrSubChp = () => {
    const [chapter, setChapter] = useState('')
    const [subChapter, setSubChapter] = useState('')
    const [choice, setChoice] = useState([] as Option[])

    const {data: chapters, refetch} = chapterApi.useGetMenuQuery()

    const [addChapter, { isSuccess }] = chapterApi.useAddChapterMutation()

    const handleChoice = (date: Option[]) => {
        setChoice(date)
    }

    const subAdd = () => {
        let idParent: number = Number(choice[0].value)
        addChapter({name: subChapter, idParent})
        refetch()
        setSubChapter('')
    }

    const add = () => {
        addChapter({name: chapter})
        refetch()
        setChapter('')
    }

    return (
        <div className={s.container}>
            <div className={s.text}>Прочие функции:</div>
            <div className={general.section}>
                <div className={general.col}>
                    <Dropdown
                        isMulti={false}
                        isSearchable
                        placeHolder='Выберите основной раздел'
                        options={chapters?.map(
                            (chapter, index) =>
                                ({value: chapter.id.toString(),
                                    label: chapter.name,
                                } as Option)
                        )}
                        key={1}
                        value={choice}
                        onChange={handleChoice}
                    />
                    <input
                        style={{marginTop: "6px"}}
                        type='text'
                        placeholder='Введите подраздел'
                        value={subChapter}
                        onChange={e => setSubChapter(e.target.value)}
                        className={general.input}
                    />
                    <button
                        className={`${general.btn} ${general.green}`}
                        onClick={subAdd}
                    >
                        Создать подраздел
                    </button>
                </div>
                <div className={general.col}>
                    <input
                        style={{marginTop: "6px"}}
                        type='text'
                        placeholder='Введите раздел'
                        value={chapter}
                        onChange={e => setChapter(e.target.value)}
                        className={general.input}
                    />
                    <button
                        className={`${general.btn} ${general.green}`}
                        onClick={add}
                    >
                        Создать раздел
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddChapterOrSubChp;