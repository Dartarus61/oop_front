import { FC } from 'react'
import Box from '@mui/material/Box'
import s from './AgreementModal.module.css'
import Modal from '@mui/material/Modal'
import ModalButton from './AgreementModalButton'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#C4D1DD',
  boxShadow: 24,
  p: 4,
  outline: 0,
  borderRadius: '17px',
  height: '95vh',
}

interface IBasicModal {
  open: boolean
  handleClose: () => void
  handleAccept: () => void
}

const AgreementModal: FC<IBasicModal> = ({
  open,
  handleClose,
  handleAccept,
}) => {
  const clickAccept = () => {
    handleAccept()
    handleClose()
  }

  return (
    <Modal
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <div className={s.title}>Пользовательское соглашение</div>
        <div className={s.body}>
          <div className={s.text}>
            Пользовательское соглашение Согласно Положению о коммерческой тайне,
            утверждённому ООО «Буферная бухта» от 01.09.2022.
          </div>

          <ol className={s.list}>
            <li className={s.listItem}>Предмет Соглашения</li>
            <ol className={s.list}>
              <li className={s.listItem}>
                Настоящее Пользовательское соглашение (далее — Соглашение)
                регулирует отношения между администрацией сайта (ООО «Буферная
                бухта», далее — Организация) и физическими лицами
                (Пользователями, Посетителями).
              </li>
              <li className={s.listItem}>
                Использование отдельных сервисов Сайта может регулироваться
                отдельными правилами, которые также являются неотъемлемой частью
                Соглашения.
              </li>
              <div className={s.text}>
                Соглашение является обязательным для всех Пользователей и
                Посетителей Сайта с момента регистрации на Сайте в установленном
                Соглашением порядке или с момента фактического начала
                пользования Сайтом, в том числе посредством просмотра страниц и
                материалов, добавления информации и так далее.
              </div>
              <li className={s.listItem}>
                Изменения к Соглашению вступают в силу и становятся
                обязательными для Пользователей, Посетителей с момента
                размещения Соглашения в новой редакции на Сайте и не требуют
                какого либо предварительного уведомления (одобрения, согласия)
                Пользователей, Посетителей. Соглашение в новой редакции
                действует как для новых Пользователей, Посетителей, так и для
                Пользователей, Посетителей, принявших условия Соглашения до
                внесения изменений.
              </li>
              <li className={s.listItem}>
                Действующая редакция Соглашения находится в сети Интернет по
                адресу https://lifehacker.ru/terms/.
              </li>
              <li className={s.listItem}>
                Пользователи, Посетители не должны использовать Сайт в какой бы
                то ни было форме, если они не согласны с какими бы то ни было
                условиями Соглашения, и принимают на себя все возможные риски
                такого использования. В случае использования Сайта в какой бы то
                ни было форме согласие Пользователей, Посетителей с условиями
                Соглашения презюмируется.
              </li>
            </ol>
            <li className={s.listItem}>
              Авторизация — процесс анализа программной частью Сайта введённых
              Пользователем Аутентификационных данных, по результатам которого
              определяется наличие у Пользователя права доступа к Личной
              странице Пользователя и сервисам Сайта.
            </li>
            <div className={s.text}>
              Аутентификационные данные — уникальный идентификатор Пользователя,
              используемый для доступа к Личной странице Пользователя.
            </div>
            <div className={s.text}>
              Контент — результаты интеллектуальной деятельности и приравненные
              к ним средства индивидуализации (в том числе музыкальные
              произведения, литературные произведения, программы для ЭВМ,
              мобильных телефонов, аудиовизуальные произведения, фонограммы,
              изображения, тексты, товарные знаки и знаки обслуживания,
              коммерческие обозначения и фирменные наименования, логотипы и
              другое), гипертекстовые ссылки, их фрагменты, информация, виджеты
              и иные объекты, размещаемые на Сайте.
            </div>
            <div className={s.text}>
              Личная страница — страница, созданная при помощи программных
              возможностей Сайта в результате получения Пользователем Учётной
              записи, содержащая Личные данные Пользователя.
            </div>
            <div className={s.text}>
              Модерация — контроль за информацией, размещаемой Пользователями
              внутри Сайта, осуществляемый в порядке и объёме, предусмотренном
              Соглашением.
            </div>
            <div className={s.text}>
              Личные (персональные) данные — достоверная, полная и актуальная
              информация, позволяющая в том числе произвести процедуру
              Авторизации Пользователя, добровольно и безвозмездно размещаемая
              Пользователем при регистрации на Сайте. Личные (персональные)
              данные включают в себя Аутентификационные данные, имя и фамилию
              Пользователя, которые Пользователь вправе указать на Личной
              странице, а также иные сведения о себе, которые Пользователь
              указывает при регистрации. Личные (персональные) данные хранятся
              на серверах Сайта и используются исключительно в целях,
              предусмотренных Соглашением и Политикой обработки персональных
              данных Пользователей.
            </div>
            <div className={s.text}>
              Пользователь — физическое лицо, получившее Учётную запись на Сайте
              в установленном Соглашением порядке.
            </div>
            <div className={s.text}>
              Пользовательский контент — Контент Сайта (включая комментарии
              Пользователя), размещаемый Пользователем самостоятельно,
              добровольно и безвозмездно.
            </div>
            <div className={s.text}>
              Посетитель — физическое лицо, использующее информацию,
              расположенную на Сайте.
            </div>
            <div className={s.text}>
              Регистрация — действия Посетителя по созданию Учётной записи на
              Сайте в установленном Соглашением порядке. В процессе Регистрации
              Пользователь указывает Аутентификационные данные, на основании
              которых Пользователю предоставляется доступ к Сайту и его
              функциональным сервисам.Учётная запись — Аутентификационные и
              Личные (персональные) данные Пользователя, хранимые на серверах
              Сайта.
            </div>
            <li className={s.listItem}>3. Регистрация Пользователя</li>
            <ol className={s.list}>
              <li className={s.listItem}>
                Для обеспечения полного доступа Посетителя к сервисам Сайта и
                получения статуса Пользователя Посетитель должен пройти
                процедуру Регистрации и создать свою Учётную запись.
              </li>
              <li className={s.listItem}>
                Пользователь несёт персональную ответственность за сохранность и
                безопасность своего пароля. Организация не несёт ответственности
                и не гарантирует безопасность Учётной записи и Личной страницы
                Пользователя в случаях:
              </li>
              <ol className={s.list}>
                <li className={s.listItem}>
                  Передачи третьим лицам (умышленно или по неосторожности)
                  пароля.
                </li>
                <li className={s.listItem}>
                  Доступа третьих лиц к Учётной записи и Личной странице
                  Пользователя с использованием программных средств, позволяющих
                  осуществить подбор и/или раскодирование пароля.
                </li>
                <li className={s.listItem}>
                  Невыполнения Пользователем рекомендаций, указанных в
                  Соглашении.
                </li>
              </ol>
              <li className={s.listItem}>
                Принимая данное Соглашение, Пользователь даёт согласие на
                получение информационных и рекламных материалов Сайта
                посредством электронной почты, указанной Пользователем на Сайте
                при регистрации. Если Пользователь не желает получать указанную
                в настоящем пункте информацию, он должен обратиться с просьбой
                об отмене информирования, отправив электронное сообщение на
                адрес (…).
              </li>
              <li className={s.listItem}>Пользователь обязуется:</li>
              <ol className={s.list}>
                <li className={s.listItem}>
                  Немедленно уведомлять Организацию о любом неразрешённом
                  Пользователем использовании своего пароля, Учётной записи,
                  Личной страницы или о любом другом нарушении безопасности.
                </li>
                <li className={s.listItem}>
                  Незамедлительно сменить свой пароль для доступа к Сайту в
                  случае, если пароль был утерян Пользователем или стал известен
                  другим лицам помимо воли Пользователя.
                </li>
              </ol>
              <li className={s.listItem}>
                Организация не отвечает за возможную потерю или порчу данных,
                которая может произойти из за несоблюдения рекомендаций,
                изложенных в Соглашении.
              </li>
              <li className={s.listItem}>
                Пароль Пользователя может быть восстановлен только в случае
                предоставления достоверной, полной и актуальной информации,
                указанной при регистрации Учётной записи. Если Пользователь
                пренебрег указанием достоверной, полной и актуальной
                регистрационной информации, Организация не сможет при обращении
                восстановить пароль.
              </li>
              <li className={s.listItem}>
                При Регистрации Пользователь не имеет права:
              </li>
              <ol className={s.list}>
                <li className={s.listItem}>
                  Выдавать себя за другого Пользователя, используя его логин и
                  пароль.
                </li>
                <li className={s.listItem}>
                  Использовать в качестве своего логина слово или
                  словосочетание, которое является нецензурным (бранным),
                  оскорбительным, дискриминационным, неуместным с точки зрения
                  общепринятой морали и нравственности.
                </li>
                <li className={s.listItem}>
                  Заимствовать логины других Пользователей и изменять их таким
                  образом, что они становятся оскорбительными для них.
                </li>
                <li className={s.listItem}>
                  Создавать более одной Учётной записи для одного Пользователя.
                </li>
              </ol>
              <li className={s.listItem}>
                Регистрацией на Сайте Пользователь подтверждает, что обладает
                необходимой правоспособностью и дееспособностью для принятия
                условий Соглашения, способен исполнять Соглашение и нести
                ответственность за его нарушение.
              </li>
              <li className={s.listItem}>
                Пользователь соглашается и подтверждает, что все действия,
                произведённые от его имени (с использованием Учётной записи
                Пользователя), расцениваются как действия этого Пользователя и
                могут повлечь за собой ответственность для Пользователя.
              </li>
              <li className={s.listItem}>
                Пользователь, соглашаясь с настоящим Пользовательским
                соглашением, предоставляет своё информированное и добровольное
                согласие на участие в стимулирующих, рекламных и иных
                мероприятиях, направленных на продвижение Сайта. Организация
                вправе направлять Пользователю любым способом информацию о
                функционировании Сайта, в том числе по адресу электронной почты,
                указанному Пользователем при Регистрации на Сайте, а также
                направлять информационные, рекламные или иные сообщения или
                размещать соответствующую (в том числе рекламную) информацию на
                самом Сайте.
              </li>
              <li className={s.listItem}>
                Служба поддержки Сайта оставляет за собой право отказать в
                Регистрации или прекратить процесс Регистрации нового
                Пользователя по своему усмотрению.
              </li>
              <li className={s.listItem}>
                Служба поддержки Сайта имеет право в любое время удалить любые
                данные и Учётные записи по любой причине или без причины. Служба
                поддержки оставляет за собой право отслеживать деятельность
                Пользователей на Сайте.
              </li>
            </ol>
            <li className={s.listItem}>
              Общие правила размещения Пользовательского контента
            </li>
            <ol className={s.list}>
              <li className={s.listItem}>
                Пользователь несёт полную ответственность за содержание и
                размещение Пользовательского контента (информации, данных,
                текстов, фотографий, графики, видео и других материалов),
                публично опубликованного с помощью сервисов Сайта. Это означает,
                что Пользователь полностью отвечает за все материалы, которые он
                загружает, отправляет, получает, передаёт или каким либо другим
                способом делает доступными с помощью сервисов Сайта.{' '}
              </li>
              <div className={s.text}>
                Пользователь/Посетитель понимает, что, используя некоторые
                сервисы Сайта, он может увидеть материалы, которые могут быть
                расценены им как оскорбительные, недостоверные или спорные, и
                при этом Пользователь/Посетитель понимает, что ответственность
                за размещение таких материалов несёт разместивший их
                Пользователь.
              </div>
              <li className={s.listItem}>
                Пользователь обязуется не использовать Сайт в незаконных целях.
              </li>
              <li className={s.listItem}>
                Пользователь соглашается с тем, что, размещая Пользовательский
                контент, Пользователь предоставляет к нему доступ для остальных
                Пользователей, Посетителей по умолчанию.
              </li>
              <li className={s.listItem}>
                Пользователям запрещается использовать сервисы Сайта для:
              </li>
              <ol className={s.list}>
                <li className={s.listItem}>
                  Загрузки, отправки, передачи или любого другого способа
                  опубликования Пользовательского контента (в том числе указывая
                  на место его нахождения, в том числе путём размещения ссылки),
                  который является незаконным, вредоносным, угрожающим,
                  оскорбляющим, противоречащим общепринятой морали и
                  нравственности, клеветническим, нарушающим авторские и иные
                  права интеллектуальной собственности, демонстрирующим
                  (пропагандирующим) ненависть, насилие, жестокость и/или
                  дискриминацию людей по расовому, этническому, половому,
                  социальному, религиозному, имущественному признакам,
                  содержащим элементы или являющимся пропагандой порнографии,
                  детской эротики, представляющим собой рекламу или являющимся
                  пропагандой услуг сексуального характера (в том числе под
                  видом иных услуг), разъясняющим порядок изготовления,
                  применения или иного использования наркотических веществ или
                  их аналогов, взрывчатых веществ или иного оружия, а также
                  нарушающим общепринятые нормы и этику общения в сети Интернет
                  либо затрудняющим использование другими Пользователями,
                  Посетителями сервисов Сайта.
                </li>
                <li className={s.listItem}>
                  Нарушения прав третьих лиц, в том числе прав
                  несовершеннолетних лиц, и/или причинения им вреда в любой
                  форме.
                </li>
                <li className={s.listItem}>
                  Ущемления прав различных меньшинств.
                </li>
                <li className={s.listItem}>
                  Загрузки, отправки, передачи или любого другого способа
                  опубликования Пользовательского контента, который Пользователь
                  не имеет права использовать или делать доступным в
                  соответствии с действующим законодательством или согласно
                  каким либо соглашениям с третьими лицами.
                </li>
                <li className={s.listItem}>
                  Загрузки, отправки, передачи или любого другого способа
                  опубликования Пользовательского контента, который нарушает
                  любые права третьих лиц, в том числе право на товарные знаки
                  (знаки обслуживания), коммерческую тайну и/или другую
                  интеллектуальную собственность третьих лиц, является
                  коммерческой рекламой.
                </li>
                <li className={s.listItem}>
                  Загрузки, отправки, передачи или любого другого способа
                  опубликования Пользовательского контента, содержащего вирусы
                  или другие компьютерные коды, файлы или программы,
                  предназначенные для нарушения, уничтожения либо ограничения
                  функциональности любого компьютерного или
                  телекоммуникационного оборудования или программ, для
                  осуществления несанкционированного доступа к компьютерным
                  системам, оборудованию либо данным третьих лиц, а также
                  серийные номера к коммерческим программным продуктам и
                  программы для их генерации, логины, пароли и прочие средства
                  для получения несанкционированного доступа к платным ресурсам
                  в интернете, а также размещения ссылок на вышеуказанный
                  контент.
                </li>
                <li className={s.listItem}>
                  Нарушения каких либо норм действующего российского и/или
                  международного законодательства, а также законодательства
                  иностранных государств.
                </li>
                <li className={s.listItem}>
                  Сбора, хранения и обработки персональных данных третьих лиц
                  без их согласия в установленном законом порядке.
                </li>
                <li className={s.listItem}>
                  Загрузки, отправки, передачи или любого другого способа
                  опубликования Пользовательского контента, содержащего грубые,
                  непристойные, оскорбительные, ненормативные, бранные слова и
                  выражения
                </li>
                <li className={s.listItem}>
                  Размещения ссылок на ресурсы сети Интернет, содержание которых
                  противоречит действующему законодательству РФ.
                </li>
                <li className={s.listItem}>
                  Использования автоматизированных скриптов (программ) для сбора
                  информации и (или) взаимодействия с Сайтом.
                </li>
                <li className={s.listItem}>
                  Предоставления истории действий на Сайте соответствующим
                  программам, целью которых является перезапись существующих
                  историй действий или данных, выходящих за рамки обсуждаемой
                  темы.
                </li>
                <li className={s.listItem}>
                  Передачи, отправки или содействия передаче или отправке любого
                  сообщения или запроса, разработанного или предназначенного для
                  того, чтобы получить Личные (персональные) данные любого иного
                  Пользователя Сайта.
                </li>
                <li className={s.listItem}>
                  Создания или передачи нежелательной электронной почты (спама)
                  пользователям сети Интернет.
                </li>
                <li className={s.listItem}>
                  Использования роботов и автоматизированных средств,
                  предназначенных для доступа к Сайту.
                </li>
                <li className={s.listItem}>
                  Совершения действий, которые, по мнению технической службы,
                  способствуют регистрации на Сайте несуществующих
                  Пользователей, затрудняющих работу Сайта и являющихся
                  вмешательством в обычный процесс работы Сайта.
                </li>
                <li className={s.listItem}>
                  Отправки или получения денег (либо иного вознаграждения)
                  Пользователем Сайта в обмен на фиктивные игровые процессы,
                  которые искусственно изменяют результаты голосования и место в
                  рейтинге.
                </li>
                <li className={s.listItem}>
                  Размещения объявлений или запросов, адресованных
                  неограниченному кругу лиц, о покупке или продаже каких бы то
                  ни было товаров или услуг.
                </li>
                <li className={s.listItem}>
                  Продажи или иной передачи Пользователем своей Учётной записи
                  другому Пользователю или третьему лицу.
                </li>
                <li className={s.listItem}>
                  Загрузки, отправки, передачи или любого другого способа
                  опубликования Пользовательского контента, если заведомо
                  известно, что его размещение принесёт убытки, моральный вред,
                  ущерб деловой репутации третьих лиц.
                </li>
                <li className={s.listItem}>
                  Достижения иных целей, противоречащих действующему
                  законодательству РФ и (или) Соглашению.
                </li>
              </ol>
            </ol>
            <li className={s.listItem}>Права и обязанности Организации</li>
            <ol className={s.list}>
              <li className={s.listItem}>
                Организация не занимается рассмотрением и разрешением споров и
                конфликтных ситуаций, возникающих между Пользователями,
                Посетителями Сайта, вместе с тем оставляет за собой право
                заблокировать страницу Пользователя и (или) удалить
                Пользовательский контент в случае получения от других
                Пользователей, Посетителей мотивированных жалоб на некорректное
                поведение данного Пользователя.
              </li>
              <li className={s.listItem}>
                Организация вправе удалить любой Пользовательский контент без
                уведомления Пользователя и объяснения причин.
              </li>
              <li className={s.listItem}>
                В случаях, установленных действующим законодательством РФ,
                Организация передаёт Личные (персональные) данные,
                Пользовательский контент, IP адреса, любую другую информацию
                уполномоченным органам на основании соответствующих запросов.
              </li>
              <li className={s.listItem}>
                Организация вправе использовать информацию о действиях
                Пользователей, Посетителей на Сайте в целях улучшения его
                работы.
              </li>
              <li className={s.listItem}>
                Организация вправе вводить любые ограничения в отношении
                пользования Сайтом как в целом, так и для отдельных
                Пользователей без объяснения причин и предварительных
                уведомлений Пользователей.
              </li>
              <li className={s.listItem}>
                Организация вправе закрыть, приостановить функционирование,
                изменить Сайт либо его часть без объяснения причин и
                предварительных уведомлений Пользователей.
              </li>
              <li className={s.listItem}>
                Организация вправе приостанавливать доступ Пользователя к Сайту
                для проведения необходимых плановых профилактических и ремонтных
                работ на технических ресурсах.
              </li>
              <li className={s.listItem}>
                Для достижения целей надлежащего функционирования Сайта и
                технической поддержки его сервисов Организация вправе привлекать
                третьих лиц на условиях соответствующих договоров.
              </li>
            </ol>
            <li className={s.listItem}>
              Авторские права и права на иные результаты интеллектуальной
              деятельности
            </li>
            <ol className={s.list}>
              <li className={s.listItem}>
                Контент Сайта является объектом исключительных прав Организации.
              </li>
              <li className={s.listItem}>
                Любое использование (включая воспроизведение, копирование,
                модификацию, продажу, доведение до всеобщего сведения,
                распространение целиком или по частям), в том числе в
                коммерческих целях, Контента Сайта без получения
                предварительного согласия Организации запрещено, за исключением
                случаев, предусмотренных Соглашением.
              </li>
              <li className={s.listItem}>
                Размещая Пользовательский контент, Пользователь гарантирует, что
                обладает всеми правами и полномочиями, необходимыми для
                размещения такого контента и предоставления прав на него в
                соответствии с условиями Соглашения, и несёт ответственность за
                последствия нарушения (недостоверности) такой гарантии в
                соответствии с действующим законодательством РФ.
              </li>
              <li className={s.listItem}>
                Размещая Пользовательский контент, Пользователь предоставляет
                Организации исключительную лицензию на его использование,
                включая воспроизведение, распространение, публичный показ,
                переработку, доведение до всеобщего сведения без ограничения
                территории и срока, без выплаты дополнительного вознаграждения
                Пользователю. Размещённый Пользовательский контент может быть
                использован Организацией в любом сервисе Сайта.
              </li>
              <li className={s.listItem}>
                Указанная исключительная лицензия на использование
                Пользовательского контента предоставляется Организации
                одновременно с добавлением такого контента на Сайт на весь срок
                действия исключительных прав на объекты авторских и (или)
                смежных прав, образующих такой контент.
              </li>
              <li className={s.listItem}>
                Пользователь соглашается с тем, что:
              </li>
              <ol className={s.list}>
                <li className={s.listItem}>
                  Размещая Пользовательский контент, делает это добровольно и
                  безвозмездно.
                </li>
                <li className={s.listItem}>
                  В случае размещения Пользовательского контента исключительные
                  права на такой контент сохраняются Организацией.
                </li>
                <li className={s.listItem}>
                  Организация имеет право сохранять архивные копии удалённого
                  контента, размещённого Пользователем.
                </li>
                <li className={s.listItem}>
                  Условия Соглашения, относящиеся к передаче Пользователем прав,
                  указанных в пункте 6.4 Соглашения, остаются в силе после
                  удаления Пользователем или службой технической поддержки
                  записи Пользователя.
                </li>
                <li className={s.listItem}>
                  Размещая Пользовательский контент, Пользователь предоставляет
                  свободный доступ к нему любым Посетителям, Пользователям Сайта
                  для ознакомления и личного использования в некоммерческих
                  целях.
                </li>
                <li className={s.listItem}>
                  Организация обладает всеми правами на Сайт как единый объект,
                  включая все его составляющие.
                </li>
              </ol>
              <li className={s.listItem}>
                {' '}
                Организация не контролирует соблюдение Пользователями авторских
                прав и иных смежных прав третьих лиц на результаты
                интеллектуальной деятельности и не несёт ответственности за
                нарушение их Пользователями.
              </li>
            </ol>
            <li className={s.listItem}>Ответственность</li>
            <ol className={s.list}>
              <li className={s.listItem}>
                Организация не ведёт контроль и не обязана принимать каких либо
                действий, касающихся контроля:
              </li>
              <ol className={s.list}>
                <li className={s.listItem}>
                  Способа, с помощью которого Пользователи посещают Сайт или с
                  помощью которого пользуются сервисами Сайта.
                </li>
                <li className={s.listItem}>
                  Того, какой эффект на Пользователей, Посетителей может оказать
                  размещённый на Сайте контент, каким образом Пользователи,
                  Посетители могут толковать размещённую на Сайте информацию.
                </li>
                <li className={s.listItem}>
                  Действий, предпринятых Пользователями, Посетителями после
                  ознакомления с размещённым на Сайте контентом.
                </li>
              </ol>
              <li className={s.listItem}>
                Сайт может содержать (или направлять по этому содержимому
                Пользователя, Посетителя) ссылки на другие сайты, содержащие
                информацию. При этом Организация не несёт ответственности за
                содержание таких сайтов, доступ на которые получен через сервисы
                Сайта, за соблюдение исключительных прав третьих лиц, за
                законность размещённых на таких сайтах материалов.
              </li>
              <li className={s.listItem}>
                В случае нанесения ущерба (убытков, вреда) третьим лицам, другим
                Пользователям или Сайту Пользователь обязуется возместить
                причинённый ущерб (убытки, вред) в полном объёме в соответствии
                с действующим законодательством РФ.
              </li>
              <li className={s.listItem}>
                Пользователь несёт ответственность за все расходы (включая
                возмещение убытков, вреда, штрафов, судебных и иных расходов и
                издержек) Организации в случае предъявления третьими лицами
                каких либо претензий, в том числе (но не исключительно)
                претензий, связанных с защитой интеллектуальных прав третьих
                лиц, и за какие либо обязательства, возникшие у Организации в
                связи с требованиями третьих лиц, связанные с нарушением
                Пользователем условий Соглашения. Пользователь обязуется принять
                все необходимые и возможные меры, направленные на исключение
                Организации из числа ответчиков по таким требованиям.
              </li>
              <li className={s.listItem}>
                Организация не несёт ответственности перед Пользователем и не
                возмещает Пользователю каких либо убытков, возникших или могущих
                возникнуть у Пользователя, в связи с задержками, перебоями в
                работе Сайта, невозможностью полноценного использования Сайта, а
                также сохранностью Пользовательского контента.
              </li>
              <li className={s.listItem}>
                Организация не ведёт контроль и не обязана принимать каких либо
                действий, касающихся контроля:
              </li>
            </ol>
            <li className={s.listItem}>Заключительные положения</li>
            <ol className={s.list}>
              <li className={s.listItem}>
                Признание недействительным одного из условий Соглашения не
                является основанием для признания недействительными любых других
                условий Соглашения.
              </li>
              <li className={s.listItem}>
                Соглашение регулируется и толкуется в соответствии с
                законодательством РФ. Вопросы, не урегулированные Соглашением,
                подлежат разрешению в соответствии с законодательством РФ.
              </li>
              <li className={s.listItem}>
                Пользователь/Посетитель соглашается, что в случае возникновения
                споров они подлежат разрешению в судебном порядке в соответствии
                с действующим законодательством РФ в уполномоченном органе
                судебной власти по месту нахождения Организации.
              </li>
              <li className={s.listItem}>
                Пользователь/Посетитель выражает своё согласие с тем, что
                контент может сопровождаться рекламой без какого либо
                дополнительного уведомления Пользователя, Посетителя и без каких
                бы то ни было компенсаций. При этом Пользователь/Посетитель
                обязуется не препятствовать размещению рекламы.
                Пользователь/Посетитель признаёт, что Организация несёт
                ответственность за рекламу, размещённую на Сайте, в пределах,
                установленных законодательством РФ.
              </li>
              <li className={s.listItem}>Реквизиты администрации Сайта:</li>
            </ol>
          </ol>
          <div className={s.text}>ООО «Буферная бухта»</div>
          <div className={s.text}>
            Юридический адрес: 432071, г. Ростов-на-Дону, пл. Гагарина, д. 1,
            третий этаж
          </div>
          <div className={s.text}>
            Адрес местонахождения: 432071, г. Ростов-на-Дону, пл. Гагарина, д.
            1, третий этаж
          </div>
        </div>
        <div className={s.buttonContainer}>
          <ModalButton text='Принять' onClick={clickAccept} />
          <ModalButton text='Отмена' onClick={handleClose} />
        </div>
      </Box>
    </Modal>
  )
}

export default AgreementModal
