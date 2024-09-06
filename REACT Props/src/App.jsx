import React from 'react'
import moviesData from './components/MovieData';
import MovieCard from './components/MovieCard';


const App = () => {
  return (
    <div className='container mx-auto  px-4 py-14'>
      <div className='text-white  text-center py-8 font-extrabold'>React Practice Props</div>
      <div className='grid grid-cols-1'>
        {
         moviesData.map( movie => (
         <div key={movie.id} className='mb-12'>  
                     <MovieCard
                          title={movie.title}
                          subtitle={movie.subtitle}
                          description={movie.description}
                          imageUrl={movie.imageUrl}
                          poster={movie.poster}
                          rating={movie.rating}
                          duration={movie.duration}
                          category={movie.category}
                      />


         </div>


         )


         )

        }

      </div>
    </div>
  )
}

export default App
