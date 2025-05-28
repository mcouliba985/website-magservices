import React from 'react';

const ContactForm = () => {
      return (
            <section className="bg-blue-800 lg:bg-white pb-8 lg:pb-0 md:bg-[url('/img/data-table-bg.png')] bg-no-repeat bg-contain bg-center">
                  <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-4 relative z-10">
                        {/* Partie gauche : texte et infos de contact */}
                        <div className=" text-white mb-4 md:mb-0 p-6 md:p-8 rounded-xl md:mt-8">
                              <h2 className="text-white text-3xl font-semibold mb-4">
                                    Nos contact
                              </h2>
                              <p className="mb-2 flex items-center">
                                    <i className="fas fa-envelope me-2"></i>
                                    <a
                                          href="mailto:contact@magservices-mail.org"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ml-2 hover:underline"
                                    >
                                          contact@magservices-mail.org
                                    </a>
                              </p>
                              <p className="mb-2 flex items-center">
                                    <i className="fab fa-whatsapp me-2"></i>
                                    <a
                                          href="https://wa.me/22374954352"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ml-2 text-white hover:underline"
                                    >
                                          + (223) 74 95 43 52
                                    </a>
                              </p>
                              <p className="mb-2 flex items-center">
                                    <i className="fas fa-comment-sms me-2"></i>
                                    <a
                                          href="https://wa.me/22374954352"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ml-2 text-white hover:underline"
                                    >
                                          + (1) 646-427-4510
                                    </a>
                              </p>
                              <p className="mb-2 flex items-center">
                                    <i className="fas fa-map-location-dot me-2"></i>
                                    <span className="ml-2 text-white hover:underline">
                                          Bougouba coura pres du station ORYX
                                    </span>
                              </p>
                        </div>

                        {/* Formulaire de contact */}
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl mt-[-60px] z-20">
                              <h3 className="text-gray-800 font-semibold text-lg mb-1">
                                    Remplissez le formulaire de contact et envoyez nous.
                              </h3>
                              <strong className="text-red-500 mb-8">
                                    Contactez nous via whatsapp pour le moment, le site est en
                                    maintenance
                              </strong>
                              <form className="space-y-5">
                                    <div className="flex flex-col md:flex-row gap-4">
                                          <input
                                                type="text"
                                                placeholder="Nom complet"
                                                className="w-full md:w-1/2 p-3 bg-gray-100 rounded-md focus:outline-none"
                                          />
                                          <input
                                                type="email"
                                                placeholder="Email"
                                                className="w-full md:w-1/2 p-3 bg-gray-100 rounded-md focus:outline-none"
                                          />
                                    </div>
                                    <input
                                          type="text"
                                          placeholder="Objet"
                                          className="w-full p-3 bg-gray-100 rounded-md focus:outline-none"
                                    />
                                    <textarea
                                          placeholder="Message"
                                          className="w-full p-3 bg-gray-100 rounded-md h-32 resize-none focus:outline-none"
                                    ></textarea>
                                    <button
                                          type="submit"
                                          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
                                    >
                                          Envoyer le message
                                    </button>
                              </form>
                        </div>
                  </div>
            </section>
      );
};

export default ContactForm;
