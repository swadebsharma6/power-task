import hero from '../assets/task-hero.png';

const Hero = () => {
    return (
        <section className="pb-[150px] pt-32 md:pt-[100px]">
            <div className="container lg:px-20">
            <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="flex justify-center md:order-2">
            <img
             className="max-md:w-full" 
             src={hero}
             alt="hero" 
             width='326'
             height='390'
             />
            </div>
            <div>
                <h1 className='mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]'>Tasker</h1>
                <p className='text-lg font-semibold '>Task Manager shows you what programs are running on your Windows computer and offers some limited control over those running tasks.Task Manager shows you what programs are running on your Windows computer and offers some limited control over those running tasks</p>
            </div>
            </div>
            </div>
        </section>
    );
};

export default Hero;