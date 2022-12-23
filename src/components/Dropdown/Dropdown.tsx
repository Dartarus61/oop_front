import React, { useEffect, useState, MouseEvent, useRef } from 'react'
import style from './Dropdown.module.css'

export interface Option {
  value: string
  label: string
}

export interface DropdownProps {
  isMulti: boolean
  isSearchable: boolean
  placeHolder: string
  options: Option[] | undefined
  value: Option[]
  onChange: (data: Option[]) => void
}

const Icon = () => {
  return (
    <svg height='20' width='20' viewBox='0 0 20 20'>
      <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path>
    </svg>
  )
}

const CloseIcon = () => {
  return (
    <svg height='20' width='20' viewBox='0 0 20 20'>
      <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'></path>
    </svg>
  )
}

const Dropdown = ({
  placeHolder,
  options,
  isMulti,
  isSearchable,
  value,
  onChange,
}: DropdownProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  const [y, setY] = useState(100)

  const styles = {
    transform: `translateY(${y}px)`,
  }

  useEffect(() => {
    setSearchValue('')
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  const getOptions = () => {
    if (!searchValue) {
      return options
    }
    return options?.filter(
      option =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    )
  }

  useEffect(() => {
    const handler = () => setShowMenu(false)

    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  })
  const handleInputClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
    setShowMenu(!showMenu)
  }

  const getDisplay = () => {
    if (!value || value.length === 0) {
      return
    }
    if (isMulti) {
      return (
        <div className='dropdown-tags'>
          {value.map((option: Option) => (
            <div key={option.value} className='dropdown-tag-item'>
              {option.label}
              <span
                onClick={e => onTagRemove(e, option)}
                className='dropdown-tag-close'
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      )
    }
  }

  const onItemClick = (option: Option) => {
    let newValue: Option[]
    if (value.findIndex(o => o.value === option.value) >= 0) {
      newValue = removeOption(option)
    } else {
      newValue = [option]
    }
    onChange(newValue)
  }

  const removeOption = (option: Option) => {
    return value.filter(o => o.value !== option.value)
  }

  const onTagRemove = (e: MouseEvent<HTMLSpanElement>, option: Option) => {
    e.stopPropagation()
    onChange(removeOption(option))
  }

  const isSelected = (option: Option) => {
    if (isMulti) {
      return value.filter(o => o.value === option.value).length > 0
    }

    if (!value) {
      return false
    }
  }

  return (
    <div className={style.dropdownTable}>
      <div className={style.dropdownContainer}>
        <div onClick={handleInputClick} className={style.dropdownInput}>
          <div className={style.dropdownSelectedValue}>
            {value.length ? value[0].label : placeHolder}
          </div>
          <div className={style.dropdownTools}>
            <div className={style.dropdownTool}>
              <Icon />
            </div>
          </div>
          {showMenu && (
            <div className={style.dropdownMenu}>
              {isSearchable && (
                <div className={style.searchBox}>
                  <input
                    onChange={onSearch}
                    value={searchValue}
                    ref={searchRef}
                  />
                </div>
              )}
              {getOptions()?.map(option => (
                <div
                  onClick={() => onItemClick(option)}
                  key={option.value}
                  className={`${style.dropdownItem} ${
                    isSelected(option) && style.selected
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {getDisplay()}
    </div>
  )
}

export default Dropdown
