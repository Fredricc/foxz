import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater(){
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
                model={{name: 'Two Rivers',
                latitude: -1.2114367176957692,
                longitude: 36.79510116577149}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}