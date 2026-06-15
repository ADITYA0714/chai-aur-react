import React, {useState} from 'react'

function BackGroundChanger() {
    const [bgColor, setBgColor] = useState('red');

    const colors = [
        { id: 'red', label: 'Red', class: 'bg-red-600 text-white' },
        { id: 'green', label: 'Green', class: 'bg-green-600 text-white' },
        { id: 'blue', label: 'Blue', class: 'bg-blue-600 text-white' },
        { id: 'olive', label: 'Olive', class: 'bg-lime-700 text-white' }, // olive substitute
        { id: 'grey', label: 'Grey', class: 'bg-gray-600 text-white' },
        { id: 'yellow', label: 'Yellow', class: 'bg-yellow-400 text-black' },
        { id: 'pink', label: 'Pink', class: 'bg-pink-500 text-white' },
        { id: 'purple', label: 'Purple', class: 'bg-purple-600 text-white' },
        { id: 'lavender', label: 'Lavender', class: 'bg-violet-200 text-black' }, // lavender substitute
        { id: 'white', label: 'White', class: 'bg-white text-black' },
        { id: 'black', label: 'Black', class: 'bg-black text-white' },
    ];

  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgColor }}>
      <div className="flex gap-3 p-4 bg-black/40 fixed bottom-0 left-0 w-full justify-center">
        {colors.map(color => (
          <button
            key={color.id}
            onClick={() => setBgColor(color.id)}
            className={`px-4 py-2 rounded-3xl font-semibold hover:scale-110 transition ${color.class}`}
          >
            {color.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BackGroundChanger
