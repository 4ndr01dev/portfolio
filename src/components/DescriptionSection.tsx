import React from 'react'
import { useTranslation } from 'react-i18next';
import './DescriptionSection.scss'
import Card from './atoms/Card';


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


                <Card title={t('technologyTitle')}>
                    <article>

                        <section className='technologiesContent'>
                            <div >
                                circulos
                            </div>
                            <div>
                                {t('technologySubtitle')}
                                {t('technologyDescription')}

                            </div>
                        </section>
                    </article>
                </Card>
            </div>

        </section>
    )
}

export default DescriptionSection