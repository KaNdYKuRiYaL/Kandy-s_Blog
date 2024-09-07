import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {

    return (
        <div className='font-serif flex flex-col sm:flex-row p-3 border border-teal-500 items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className='flex-1 justify-center flex flex-col '>
                <h2 className='text-2xl'>
                    Want to learn more about Javascript?
                </h2>
                <p className='text-gray-500 my-2 text-lg'>
                    Checkout these javascript projects.
                </p>
                <Button gradientDuoTone='purpleToPink'className='rounded-tl-xl rounded-bl-none'>
                    <a href='https://github.com/KaNdYKuRiYaL' target='_blank' rel='noopener noreferrer'>
                    Learn more
                    </a>

                </Button>
            </div>
            <div className='p-7 flex-1'>
                <img src='https://assets-global.website-files.com/606a802fcaa89bc357508cad/61143444834cd54b9b0a88b3_2.png'/>
            </div>
        </div>
    )
}
