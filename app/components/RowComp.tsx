"use client"

export default function RowComp({row}) {
    return (
        <tr>
            {
                Object.keys(row).map((colKey: string, colInd: number) => {
                    if(colKey== "changeFunction") return;
                    let Element = row[colKey];
                    return (
                        <td key = {colInd}>
                            {
                                typeof Element == "function"?
                                <Element/>
                                :
                                Element
                            }
                        </td>
                    )
                })
            }
        </tr>
    )
}