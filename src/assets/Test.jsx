import React, { FC, useCallback, useMemo, useRef, useState } from 'react'


const maxAvailableActiveNumber = 3
const numOfArrayElements = 20
const containerSize = 500
// interface Block {
// 	width: number
// 	height: number
// 	id: number
// }

const createArray = (length) => {
	const resultArray = []
	for (let i = 0; i < length; i++) {
		resultArray.push({
			width: Math.round(50 - Math.random() * 20),
			height: Math.round(50 - Math.random() * 20),
			id: i + 1
		})
	}
	return resultArray
}

export const Test = () => {
	const [activeElementIds, setActiveElementIds] = useState([])
	const blocks = useMemo(() => createArray(numOfArrayElements), [numOfArrayElements])
	const wrapperRef = useRef(null)
	const checkIsElementActive = useCallback(
		(currentId) => {
			return activeElementIds.some(id => id === currentId)
		},
		[activeElementIds]
	)

	const handleActivateElement = useCallback(
		(activationId) => {
			let newActualIdsList = [...activeElementIds]

			if (newActualIdsList.includes(activationId)) {
				newActualIdsList = newActualIdsList.filter(id => id !== activationId)
			} else if (newActualIdsList.length === maxAvailableActiveNumber) {
				newActualIdsList.shift()
				newActualIdsList.push(activationId)
			} else {
				newActualIdsList.push(activationId)
			}
			setActiveElementIds(newActualIdsList)
		},
		[activeElementIds, setActiveElementIds, maxAvailableActiveNumber]
	)

	console.log(activeElementIds, 'activeElementIds')
	return (
		<div ref={wrapperRef} style={{ position: 'relative', width: containerSize + 'px', height: containerSize + 'px' }}>
			{blocks.map(({ width, height, id }, index) => {
				const numRectangles = numOfArrayElements; // Adjust the number of rectangles in the circle
				console.log()
				const containerSize = wrapperRef.current?.offsetHeight || 0 // Adjust the container size
				const radius = containerSize / 2;
				const angleIncrement = (2 * Math.PI) / numRectangles;

				const angle = index * angleIncrement;
				const x = radius * Math.cos(angle) + radius;
				const y = radius * Math.sin(angle) + radius;

				return (
					<div
						key={index}
						style={{
							width,
							height,
							background: checkIsElementActive(id) ? 'blue' : 'red',
							position: 'absolute',
							left: `${x}px`,
							top: `${y}px`,
							zIndex: 99999
						}}
						onClick={() => handleActivateElement(id)}
					></div>
				)
			})}
		</div>
	)
}