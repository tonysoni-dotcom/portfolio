import React from "react"

export default React.memo(function Table({data}: {data: any}) {
    return (
        <div className="max-h-screen overflow-auto">
            <table>
                <tbody>
                    {
                        data.map((row, index) => {
                            return (
                                <tr key = {index}>
                                    {
                                        Object.keys(row).map((col, colIndex) => {
                                            return (
                                                <td key = {`${index}#${colIndex}`}>{row[col]}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
})