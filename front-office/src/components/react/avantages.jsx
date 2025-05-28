import { useState } from 'react';
import avantages from '../../datas/avantages.json';

export default function Avantages() {
      const [selectedId, setSelectedId] = useState(avantages[0].id);

      const selected = avantages.find((a) => a.id === selectedId);

      return (
            <section>
                  <div className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Colonne gauche */}
                        <div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    Les avantages de travailler avec{' '}
                                    <strong className="text-[#274BA1]">MAG SERVICES MALI</strong>
                              </h2>
                              <p className="text-gray-700 leading-relaxed lg:text-xl">
                                    Chez MAG SERVICES MALI, nous pensons global dès la première
                                    ligne de code. Depuis 5 ans, nous accompagnons des entreprises
                                    en Afrique, en Europe et ailleurs dans leur transformation
                                    digitale grâce à des solutions performantes, élégantes et sur
                                    mesure. Notre force : une équipe agile, créative et connectée
                                    aux dernières tendances technologiques. Notre ambition : faire
                                    du digital un levier de croissance pour toutes les entreprises,
                                    où qu'elles soient.
                              </p>
                        </div>

                        {/* Colonne droite (liste) */}
                        <div className="lg:max-h-96 lg:h-full shadow-lg lg:p-8 lg:mx-16">
                              <ul className="flex overflow-x-auto lg:overflow-visible gap-4 lg:flex-col pb-2 lg:pb-0">
                                    {avantages.map((item) => (
                                          <li key={item.id}>
                                                <button
                                                      onClick={() => setSelectedId(item.id)}
                                                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition whitespace-nowrap ${
                                                            selectedId === item.id
                                                                  ? 'text-orange-500'
                                                                  : ' text-gray-800 hover:bg-blue-500'
                                                      }`}
                                                >
                                                      <i
                                                            className={`${item.icon} me-2 text-xl`}
                                                      ></i>
                                                      <span>{item.titre}</span>
                                                </button>
                                          </li>
                                    ))}
                              </ul>
                        </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border space-y-2 transition lg:mr-16">
                        <h3 className="text-xl font-semibold text-[#274BA1]">
                              <i className={`${selected.icon} me-2 text-xl`}></i>
                              {selected.titre}
                        </h3>
                        <p className="text-gray-700">{selected.contenu}</p>
                  </div>
            </section>
      );
}
