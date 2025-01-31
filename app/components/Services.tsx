




const services = [
    { id: '01',
      title: 'Web Design',
      description: 'Designing visually captivating and user-centric websites to make your vision come to life.'
    },
    { id: '02',
      title: 'Interactive Web Development',
      description: 'Building interactive and dynamic websites that are both functional and engaging for users.'
    },
    { id: '03',
        title: 'UX/UI Design',
        description: 'Creating seamless and intuitive designs that prioritise user experience and accessibility.'
    },
    { id: '04',
        title: 'Backend Development',
        description: 'Implementing robust backend solutions, integrating databases, and ensuring secure data management.'
    },
    { id: '05',
        title: 'Prototyping and Wireframing',
        description: 'Turning ideas into interactive prototypes to refine and perfect the user journey.'
    },
    { id: '06',
        title: 'Digital Marketing & Video Editing',
        description: 'Creating engaging video content for websites and social media platforms to enhance user engagement and build brand awareness.'
    },
]



export const Services = () => {

    return(
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                     <h2 className="text-6xl font-extrabold sticky top-20">SERVICES</h2>
                </div>

                <div className="md:w-3/4">
                    {services.map(service => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-blue-400 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}