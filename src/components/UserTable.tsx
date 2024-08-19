import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import useStore from "../useStore.ts";
import TableBody from "@mui/material/TableBody";
import DataManager from "./DataManager.tsx";
import UserInfoPopOver from "./UserInfoPopOver.tsx";
import FormatDate from "./FormatDate.tsx";

const NewUserTable = () => {
    const {data} = useStore();


    return (
        <>
            <DataManager/>
            <TableContainer component={Paper} sx={{width: '800px', mx: 'auto'}}>
                <Table sx={{width: 1, tableLayout: 'fixed'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: '40%'}}>نام</TableCell>
                            <TableCell style={{width: '40%'}}>نام خانوادگی</TableCell>
                            <TableCell style={{width: '40%'}}>شماره موبایل</TableCell>
                            <TableCell style={{width: '40%'}}>تاریخ ثبت نام</TableCell>
                            <TableCell style={{width: '40%'}}>عملیات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.lastName}</TableCell>
                                <TableCell>{row.mobile}</TableCell>
                                <TableCell><FormatDate timestamp={row.createTime}/></TableCell>
                                <TableCell><UserInfoPopOver user={row}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};


export default NewUserTable;