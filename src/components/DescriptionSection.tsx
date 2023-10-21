import React from 'react'
import { useTranslation } from 'react-i18next';
import './DescriptionSection.scss'

const DescriptionSection = () => {
    const { t } = useTranslation()
    return (
        <section className='profile'>
            <div className='button'>
                <a href='google.com'> {t('cv')} </a>
            </div>
            <div className='description'>
                <p>
                    {t('description')}
                </p>
            </div>

            <div className='technologies'>
                <article className='technologiesCard'>

                <h3>
                    {t('technologyTitle')}

                </h3>
                <section>
                    <div>
                        circulos
                    </div>
                    <div>
                        {t('technologySubtitle')}
                        {t('technologyDescription')}

                    </div>
                </section>
                </article>
            </div>
        </section>
    )
}

export default DescriptionSection