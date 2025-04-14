import { Skeleton, Spin } from 'antd';


const useLoader = () => {
    const  dynamikLoader =()=>{

        return (

            <div className="h-screen flex items-center justify-center">
                        <Spin size="large" />
            </div>
        )
    }


    const homeLoader =()=>{
        return (

            <div className='flex flex-col gap-3'>
                <div className=' !w-full min-h-[353px]'>
                <Skeleton.Image className='!w-full !h-full'/>
                </div>
                <Skeleton.Input/>
                <Skeleton.Input/>
                <Skeleton.Input/>
            </div>
        )
    }

    const sessionLoader =()=>{
        return (
            <div className='w-full flex items-start gap-[10em] py-1'>
                <Skeleton.Input className='!w-[30px] !h-[3em]'/>
                <div className='flex flex-col gap-2 w-full'>
                    <Skeleton.Input className='!w-full'/>
                    <Skeleton.Input className='!w-full'/>
                    <Skeleton.Input className='!w-full'/>
                </div>
            </div>
        )
    }


    return { dynamikLoader , homeLoader ,  sessionLoader }
}

export default useLoader