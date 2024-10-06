import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
    return (
        <div>
            <Title id='portfolio'>Portfolio</Title>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 md:w-auto lg:w-auto">
                    {portfolio.map(project => (
                        <PortfolioItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;