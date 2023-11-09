import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './DescriptionSection.scss'
import Card from './atoms/Card';
import ImagesGrid from './atoms/ImagesGrid';
import { Technology } from '../types/Technologies';
import Modal from './atoms/Modal';
const DescriptionSection = () => {
    const { t } = useTranslation()
    const [technologies, setTechnologies] = useState<Technology[]>([{
        name: 'typescript',
        description: 'typescript',
        index: 1,
        imageUrl: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png'
    }, {
        name: 'typescript',
        description: 'typescript',
        index: 1,
        imageUrl: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png'
    }, {
        name: 'typescript',
        description: 'typescript',
        index: 1,
        imageUrl: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png'
    }, {
        name: 'typescript',
        description: 'typescript',
        index: 1,
        imageUrl: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png'
    }])
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)
    const buttonHandler = async () => {

        let response = await fetch('http://localhost:8000/test', { method: 'GET' })
        console.log(response.ok)
        if (!response.ok) {
            alert('Ha ocurrido un error al intentar descargar el archivo. \
            Inténtelo nuevamente mas tarde')
        }
        let pdfFile = await response.blob()
        console.log(pdfFile.size);
        downloadBlobPdfFile(pdfFile, getFileName())
        // TODO hacer que esta función se encarge de descargar el blob
    }
    const downloadBlobPdfFile = (file: Blob, fileName: string) => {
        // TODO pasar a carpeta utils 
        console.log(file)
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(file)

        link.setAttribute('download', fileName)

        document.body.appendChild(link)
        link.click()

    }
    const getFileName = () => {
        return 'cv_alvaro_andrade_2023_fs.pdf'
    }
    const closeModalHandler = () => {
        setModalIsOpen(false)
    }
    const handleCardClick = () =>{
        setModalIsOpen(true)
    }
    return (
        <section className='profile'>
            <div className='button'>
                <a href='#' onClick={buttonHandler} > {t('cv')} </a>
            </div>
            <div className='description'>
                <p>
                    {t('description')}
                </p>
            </div>

            <div className='technologies'>
                <Card title={t('technologyTitle')} isClickable={true} onClick={handleCardClick}>
                    <article className='technology_card_article'>
                        <section className='technologiesContent'>
                            <div className='imageGridSection' >

                                <ImagesGrid technologies={technologies}></ImagesGrid>
                            </div>
                            <div className='technologyDescription'>
                                <h4>

                                    {t('technologySubtitle')}
                                </h4>
                                <p>
                                    {t('technologyDescription')}
                                </p>

                            </div>
                        </section>
                    </article>
                </Card>
                <Modal onClose={closeModalHandler} isOpen={modalIsOpen}>
                    <p>hola</p>
                </Modal>
            </div>

        </section>
    )
}

export default DescriptionSection