import React from 'react';
import { useState } from 'react';
import "styles/App.css";

const Policy = () => {
    const [tableData] = useState([
        ['신발', '아우터•상의•하의', '가방•시계•지갑•패션잡화'],
        ['테크', '뷰티•컬렉터블•캠핑•가구/리빙', '프리미엄 시계'],
        ['프리미엄 가방']
    ]);
    
    const [selectedDescription, setSelectedDescription] = useState('');
    const [selectedCell, setSelectedCell] = useState({ rowIndex: -1, cellIndex: -1 });

    const handleCellClick = (rowIndex, cellIndex, description) => {
        setSelectedCell({ rowIndex, cellIndex });
        setSelectedDescription(description);
    };

    return (
        <policy>
            <div className="category_list">
                <div className="table">
                    <div className="tbody">
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td className={`category_chunk ${rowIndex === selectedCell.rowIndex && cellIndex === selectedCell.cellIndex ? 'selected' : ''}`} key={cellIndex} onClick={() => handleCellClick(rowIndex, cellIndex, row[tableData[0].length-1])}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </div>
                </div>
            </div>
            <div className="description">
                <p>{selectedDescription}</p>
            </div>
        </policy>
    );
};

export default Policy;