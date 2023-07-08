import React from 'react'
import ConnectedSVG from './ConnectedSVG'
import { useTranslation } from 'next-i18next';

export default function Connected() {
    const { t } = useTranslation('home');
    const { t: tCommon } = useTranslation('common');

    return (
        <section id='connected'>
            <div className="text">
                <h2>
                    {t('connected.title')}
                </h2>

                <p>
                    {t('connected.text1')}
                </p>

                <p>
                    {t('connected.text2')}
                </p>
            </div>

            <ConnectedSVG />

            <style jsx>{`
            #connected {
                width: 100%;
                height: 60vh;
                display: flex;
                padding: 0px var(--padding-sections-horizontal);
                position: relative;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8rem;
            }

            #connected .text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 60%;
                height: 100%;
            }

            @media (max-width: 1100px) {
                #connected {
                    flex-direction: column;
                    height: auto;
                    padding: 0px 2rem;
                }

                #connected .text {
                    margin-top: 2rem;
                    width: 100%;
                }
            }

            @media (max-width: 700px) {
                #connected {
                    padding: 0px 1rem;
                }

                #connected .text p {
                    font-size: 1rem;
                    text-align: center;
                    line-height: 1.5rem;
                }
            }
        
        `}</style>

        </section>
    )
}
