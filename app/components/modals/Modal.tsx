'use client'

import {useState, useEffect, useCallback} from 'react'
import { BooleanLiteral } from 'typescript'
import {IoMdClose} from 'react-icons/io'

interface ModalProps {
    isOpen?: Boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {

    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose()
        }, 300)
    }, [disabled, onClose])

  return (
    <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0
        z-50 outline-none focus:outline-none bg-neutral-800/70">
          <div className="relative w-full md:w-4/6 lg:3/6 xl:w-2/5 h-full lg:h-auto md:h-auto">
            {/* Content */}
            <div className={`translate duration-300 h-full 
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
            `}>
               <div className="translate h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none">
                    {/* HEADER */}
                    <div className="flex items-center justify-center p-6 rounded-t relative border-b-[1px]">
                        <button 
                        className=" p-1
                        border-0 
                        hover:opacity-70
                        transition
                        absolute
                        left-9"
                        onClick={handleClose}>
                            <IoMdClose size={18}/>
                        </button>
                        <div className="text-lg font-semibold">
                            {title}
                        </div>                        
                    </div>
                    {/* BODY */}
                    <div className="relative p-6 flex-auto">
                            {body}
                    </div>
                        {/* FOOTER */}
                    <div className=" flex flex-col gap-2 p-6">
                        <div className="flex flex-row items-center gap-4 w-full">
                            
                        </div>
                        {footer}                        
                    </div>
                </div> 
            </div>

          </div>  
        </div>
    </div>
  )
}

export default Modal