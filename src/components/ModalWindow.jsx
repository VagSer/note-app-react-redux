import '../style/ModalWindow.css'

export default function ModalWindow({children, visible, setVisible}) {
    const rootClasses = ['ModalWindow']
    if (visible) {
        rootClasses.push('active')
    }

    return(
        <div className={rootClasses.join(' ')}>
            <div className='ModalWindowContent'>
                {children}
            </div>
        </div>
    )
}