import React from 'react'

const Newsitem = ({title,description,imageUrl,newsUrl,author,date,source}) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 relative">
        <span className='absolute bg-orange-500 text-blue-50 rounded-lg p-2 right-0'>{ source}</span>
  <img className="w-full" src={imageUrl} alt=""/>
  <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
    <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4">
          <p className="text-lg text-gray-800 mb-5"> By {!author?"unknow":author} on {new Date(date).toGMTString()}</p>
        <a href={newsUrl} target='_blank' className="bg-slate-900 text-lg px-4 py-2 text-white rounded-full">Read More</a>
        </div>
  
</div>
    </div>
    
  )
}

export default Newsitem