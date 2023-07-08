import React from 'react'
import TecnologiesTopWave from './HabilitiesTopWave'
import HabilityCard from './HabilityCard'
import { useTranslation } from 'next-i18next';

export default function HabilitiesSection() {
    const { t } = useTranslation('home');

    return (
        <section className='habilities' id="habilities">
            <TecnologiesTopWave />

            <div className="data_container">
                <h2>
                    {t('whyUs.title')}
                </h2>

                <HabilityCard image={'/images/habilities/brushes.png'} title={t('whyUs.reason1.title')}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        {t('whyUs.reason1.text')}
                    </span>
                    <br />
                    <br />

                    <span>
                        {t('whyUs.reason1.footer')}
                    </span>
                </HabilityCard>

                <HabilityCard reverse image='/images/habilities/idea.png' title={t('whyUs.reason2.title')}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        {t('whyUs.reason2.text')}
                    </span>
                    <br />
                    <br />

                    <span>
                        {t('whyUs.reason2.footer')}
                    </span>
                </HabilityCard>

                <HabilityCard image='/images/habilities/innovation.png' title={t('whyUs.reason3.title')}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        {t('whyUs.reason3.text')}
                    </span>

                    <br />
                    <br />

                    <span>
                        {t('whyUs.reason3.footer')}
                    </span>
                </HabilityCard>

                <HabilityCard reverse image='/images/habilities/quick.png' title={t('whyUs.reason4.title')}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        {t('whyUs.reason4.text')}
                    </span>
                </HabilityCard>

                <HabilityCard full image='/images/habilities/virtue.png' title={t('whyUs.reason5.title')}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        {t('whyUs.reason5.text')} <br />
                        <br />
                        <b>
                            {t('whyUs.reason5.text_2.title')}
                        </b> {t('whyUs.reason5.text_2.text')} <br />
                        <br />
                        <b>
                            {t('whyUs.reason5.text_3.title')}
                        </b> {t('whyUs.reason5.text_3.text')} <br />
                        <br />

                        <b>
                            {t('whyUs.reason5.text_4.title')}    
                        </b> {t('whyUs.reason5.text_4.text')} <br />
                        <br />
                        <b>
                            {t('whyUs.reason5.footer')}
                        </b>
                    </span>
                </HabilityCard>
            </div>

            <style jsx>{`
            .data_container {
                width: 100%;
                transform: translateY(-5px);
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 70px var(--padding-sections-horizontal);
                background: linear-gradient(0deg, rgba(0,0,0,1) 0%, var(--color-alternative) 0%, var(--color-alternative-variant) 100%);
            }

            h2 {
                font-size: 2.5rem;
                text-align: center;
            }

            @media screen and (min-width: 1100px) {
                
            }

        `}</style>
        </section>
    )
}