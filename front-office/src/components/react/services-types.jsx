import { useState } from 'react';
import services from '../../datas/services.json';
import ContactForm from './ContactForm';

export default function ServiceTypes({ service, slug }) {
      const [selectedType, setSelectedType] = useState(service.types[0]);
      const [selectedSlug, setSelectedSlug] = useState(slug);

      const contactInfo = {
            email: 'contact@magservices-mali.org',
            internationalize: '+1 226-240-6837',
            local: '+223 74-95-43-52',
      };

      return (
            <section className="container px-4 mx-auto pt-8 mb-8">
                  <article className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left content */}
                        <div className="lg:col-span-2 space-y-6">
                              <div className="rounded-2xl overflow-hidden max-h-[450px]">
                                    <img
                                          src={selectedType.image}
                                          alt={service.title ?? 'Service image'}
                                          className="w-full h-auto"
                                          loading="lazy"
                                    />
                              </div>

                              <div>
                                    <h2 className="font-bold text-2xl lg:text-4xl mb-2">
                                          {selectedType.hook}
                                    </h2>
                                    <p className="text-justify font-light">
                                          {selectedType.content}
                                    </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                          { title: 'Objectifs', list: selectedType?.objectifs },
                                          {
                                                title: 'Public cible',
                                                list: selectedType?.public_cible,
                                          },
                                          {
                                                title: 'Fonctionnalités incluses',
                                                list: selectedType?.incluses,
                                          },
                                          { title: 'Avantages', list: selectedType?.avantages },
                                    ].map(
                                          (section, i) =>
                                                section.list?.length > 0 && (
                                                      <div key={i}>
                                                            <h3 className="text-xl font-bold mb-2">
                                                                  {section.title}
                                                            </h3>
                                                            <ul className="list-disc pl-5 space-y-1">
                                                                  {section.list.map((item, idx) => (
                                                                        <li key={idx}>{item}</li>
                                                                  ))}
                                                            </ul>
                                                      </div>
                                                )
                                    )}
                              </div>

                              <a
                                    href="#"
                                    className="text-orange-500 underline inline-block mt-6 focus:outline-none focus:ring-2 focus:ring-orange-400"
                              >
                                    👉 Vous voulez concrétiser votre projet ? Découvrez comment on
                                    le réalise avec vous.
                              </a>
                        </div>

                        {/* Right Sidebar */}
                        <aside className="space-y-6 xl:mx-8">
                              {/* Types List */}
                              <div className="border border-orange-500 rounded-2xl">
                                    <h3 className="p-4 font-bold">Différents types</h3>
                                    <hr className="border-orange-500" />
                                    <ul className="flex flex-col">
                                          {service.types.map((type) => (
                                                <li key={type.id}>
                                                      <button
                                                            onClick={() => setSelectedType(type)}
                                                            className={`w-full text-left px-4 py-3 transition rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                                                                  selectedType.id === type.id
                                                                        ? 'bg-orange-100 font-bold text-orange-600'
                                                                        : 'hover:bg-orange-50'
                                                            }`}
                                                            aria-pressed={
                                                                  selectedType.id === type.id
                                                            }
                                                      >
                                                            {type.title}
                                                      </button>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              {/* Services List */}
                              <div className="border border-orange-500 rounded-2xl">
                                    <h3 className="p-4 font-bold">Nos services</h3>
                                    <hr className="border-orange-500" />
                                    <ul className="flex flex-col">
                                          {services.map((item) => (
                                                <li key={item.id}>
                                                      <a
                                                            href={item.slug}
                                                            onClick={() =>
                                                                  setSelectedSlug(item.slug)
                                                            }
                                                            className={`block px-4 py-3 rounded-xl transition ${
                                                                  item.slug === selectedSlug
                                                                        ? 'bg-orange-100 text-orange-700 font-semibold'
                                                                        : 'hover:bg-orange-50'
                                                            } focus:outline-none focus:ring-2 focus:ring-orange-400`}
                                                            aria-current={
                                                                  item.slug === selectedSlug
                                                                        ? 'page'
                                                                        : undefined
                                                            }
                                                      >
                                                            {item.title}
                                                      </a>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              {/* Contact Info */}
                              <div className="border text-orange-500 border-orange-500 rounded-2xl">
                                    <h3 className="p-4 font-bold text-black">Nos contacts</h3>
                                    <hr className="border-orange-500" />
                                    <ul className="flex flex-col gap-4 p-4">
                                          {[
                                                {
                                                      icon: 'fas fa-phone',
                                                      label: 'Local',
                                                      value: contactInfo.local,
                                                      link: 'https://wa.me/22374954352',
                                                },
                                                {
                                                      icon: 'fab fa-whatsapp',
                                                      label: 'International',
                                                      value: contactInfo.internationalize,
                                                      link: 'https://wa.me/22374954352',
                                                },
                                                {
                                                      icon: 'far fa-envelope',
                                                      label: 'Adresse Email',
                                                      value: contactInfo.email,
                                                      link: `mailto:${contactInfo.email}`,
                                                },
                                          ].map((item, i) => (
                                                <li key={i}>
                                                      <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex gap-4 items-center pb-4 border-b border-orange-300 hover:text-orange-900 last:border-0 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                                      >
                                                            <i
                                                                  className={`${item.icon} text-2xl`}
                                                                  aria-hidden="true"
                                                            ></i>
                                                            <div>
                                                                  <h4 className="text-base font-semibold">
                                                                        {item.label}
                                                                  </h4>
                                                                  <span className="block text-sm">
                                                                        {item.value}
                                                                  </span>
                                                            </div>
                                                      </a>
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                        </aside>
                  </article>
            </section>
      );
}
