import Link from "next/link";

export function Header() {
    return(
        <header className="bg-orange-400 p-2 items-center flex justify-between">
            <div className="">Web Store</div>
            <div className="">
                <div className="flex content-center gap-1">
                    <Link href="cart" className="bg-white w-10 hover:bg-orange-200 shadow-md cursor-pointer rounded-full flex items-center justify-center h-10 text-black">
                        <svg width="64px" height="64px" viewBox="0 0 1024 1024" className="icon w-4" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M960.1 258.4H245.8l-36.1-169H63.9v44h110.2l26.7 125 100.3 469.9 530 0.4v-44l-494.4-0.3-22.6-105.9H832l128.1-320.1z m-65 44L855.6 401H276.3l-21.1-98.6h639.9zM304.8 534.5L279.7 417h569.5l-47 117.5H304.8z" fill="#39393A"></path><path d="M375.6 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.3-72-72-72zM732 810.6c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52m0-20c-39.7 0-72 32.2-72 72s32.2 72 72 72c39.7 0 72-32.2 72-72s-32.3-72-72-72zM447.5 302.4h16v232.1h-16zM652 302.4h16v232.1h-16z" fill="#E73B37"></path><path d="M276.3 401l3.4 16-3.4-16z" fill="#343535"></path></g></svg>
                    </Link>
                    <Link href="account" className="bg-white w-10 hover:bg-orange-200 shadow-md cursor-pointer rounded-full flex items-center justify-center h-10 text-black">
                        <svg width="64px" height="64px" viewBox="0 0 1024 1024" className="icon w-4" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 616.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M511.6 656.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M512.4 697.7m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M512 130.8c42.1 0 81.7 16.4 111.5 46.2s46.2 69.4 46.2 111.5-16.4 81.7-46.2 111.5c-29.8 29.8-69.4 46.2-111.5 46.2s-81.7-16.4-111.5-46.2c-29.8-29.8-46.2-69.4-46.2-111.5s16.4-81.7 46.2-111.5 69.4-46.2 111.5-46.2m0-44c-111.4 0-201.6 90.3-201.6 201.6C310.4 399.8 400.7 490 512 490c111.4 0 201.6-90.3 201.6-201.6S623.3 86.8 512 86.8zM512.3 523.5L84 681.4v255.7h856V681.4L512.3 523.5zM896 893.1H128V712.6l384.3-142.4L896 712.6v180.5z" fill="#39393A"></path><path d="M555.4 585.3l-1.4-0.5v159.9c0 11.7-4.8 22.3-12.4 30-7.7 7.7-18.3 12.4-30 12.4-23.4 0-42.4-19-42.4-42.4V585.3l-1.4 0.5-14.6 5.2v153.8c0 32.2 26.2 58.4 58.4 58.4S570 777 570 744.8V590.5l-14.6-5.2z" fill="#E73B37"></path></g></svg>
                    </Link>
                </div>
            </div>
        </header>
    )
}