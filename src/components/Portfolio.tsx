import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
    return (
        <div>
            <Title id='portfolio'>Portfolio</Title>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-10/12 md:w-11/12 lg:w-11/12 max-w-[1000px]">
                    {portfolio.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;