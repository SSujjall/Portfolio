interface PortfolioItemProps {
    title: string;
    imgUrl: string;
    stack: string[];
    link: string;
}

function PortfolioItem({ title, imgUrl, stack, link }: PortfolioItemProps) {
    return (
        <div className='duration-200 hover:-translate-y-1 border-stone-400 drop-shadow-md dark:shadow-gray-600 dark:shadow-md rounded-md overflow-hidden'>
            <a href={link}>
                <img
                    src={imgUrl}
                    alt="portfolio"
                    className="w-full h-36 md:h-48 object-cover cursor-pointer"
                    loading="lazy"
                />
            </a>

            <div className='w-full p-4 bg-white dark:bg-stone-900'>
                <h3 className='text-lg md:text-xl mb-2 md-mb-3 font-semibold'>
                    {title}
                </h3>

                <p className='flex flex-wrap gap-2 flex-row items-center justify-center text-cs md:text-sm'>
                    {stack.map(item => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-200 rounded-md'>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;