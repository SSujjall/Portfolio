function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
            <h1 className="text-5xl md:text-7xl mb-1 md:mb-3 font-extrabold">Sujal Maharjan</h1>

            <p className="text-2xl md:text-3xl mb-3 font-bold">Software Developer</p>

            <p className='text-sm max-w-sm md:max-w-2xl lg:max-w-3xl mb-6'>
                A BSc. (Hons) computing major student at Islington College with strong academic achievements.
                Possess teamwork capabilities and communication skills with an intermediate level of proficiency
                in English. Passionately committed to perpetual learning and staying updated with the cutting
                edge technology trends. Aspiring to forge a successful career in software development.
            </p>

            <div className="flex justify-center mb-8">
                <a href="https://drive.google.com/file/d/1VAd48bm-wIC1J08LMh7lHHamJT3gZ67P/view?usp=sharing"
                    className="text-center inline-block px-8 
                    py-3 w-max text-base font-medium rounded-md
                    text-white dark:text-black bg-stone-900 dark:bg-stone-100">
                    CV
                </a>
            </div>
        </div>
    )
}

export default Intro;