export default function LoadingPage(){
  return (
  <div className="flex flex-col justify-center items-center h-screen gap-16">
      <div className='flex space-x-2 justify-center items-center'>
        <span className='sr-only'>Loading...</span>
          <div className='h-8 w-8 bg-green-600 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-green-600 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-green-600 rounded-full animate-bounce'></div>
      </div>
      <h1 className='text-xl'>Loading...</h1>
  </div>
  )
}