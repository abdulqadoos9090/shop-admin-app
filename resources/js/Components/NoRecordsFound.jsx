import React from 'react';

export default function NoRecordsFound({colSpan}) {
return(
    <tr className="text-center">
        <td className="fw-bolder text-secondary" colSpan={colSpan}><h5 className="mt-4">No Records Found.</h5></td>
    </tr>
)
}
