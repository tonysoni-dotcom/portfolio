"use client"

import React from "react"
import RowComp from "./RowComp"

export default React.memo(function TableComp({rows}: {rows:any[]}) {
    console.log("child rerendered")
    return (
        <div className="max-w-5xl mx-auto bg-zinc-700 mt-20 max-h-100 overflow-auto">
            This is table comp
            <table>
                <tbody>
                    {
                        <tr className="position-sticky top-0">
                            {
                                rows[0] && Object.keys(rows[0]).map((colKey: string, colInd: number) => {
                                    return (
                                        <td key = {"-" + colInd}>
                                            {colKey}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    }
                    {
                        rows.map((row: Object, index:number) => {
                            return (
                                <RowComp
                                    key = {index}
                                    row = {row}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
})