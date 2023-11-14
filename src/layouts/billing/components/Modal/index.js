import React, { useState } from 'react';
import { Card, Stack, Grid, Radio, RadioGroup } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import GreenLightning from "assets/images/shapes/green-lightning.svg";
import WhiteLightning from "assets/images/shapes/white-lightning.svg";
import linearGradient from "assets/theme/functions/linearGradient";
import colors from "assets/theme/base/colors";
import carProfile from "assets/images/shapes/car-profile.svg";
import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartDataProfile1, lineChartDataProfile2 } from "variables/charts";
import { lineChartOptionsProfile2, lineChartOptionsProfile1 } from "variables/charts";
import CircularProgress from "@mui/material/CircularProgress";
import { BsPlus } from "react-icons/bs";
import VuiButton from "components/VuiButton";
import VuiInput from "components/VuiInput";

const cardStyle = {
    position: "fixed",
    top: "25%",
    left: "25%",
    width: "50%",
    height: "55%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    border: "4",
    borderColor: "white",
    color: "white",
};

const AddNoteCard = ({ isOpen, onClose, onSave }) => {
    const [ammount, setAmmount] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    const [inputErrors, setInputErrors] = useState([false, false, false, false]);


    const handleOnSave = () => {
        let errors = [false, false];
        if (!ammount) {
            errors[0] = true;
        }
        if (!description) {
            errors[1] = true;
        }
        if (!type) {
            errors[3] = true;
        }
        if (errors[0] || errors[1] || errors[2] || errors[3]) {
            setInputErrors(errors);
            return;
        }

        const formattedDate = new Date(date).toLocaleDateString('en-US');

        onSave({ amount: Number(ammount), description: description, type: type, date: formattedDate });
    };


    if (!isOpen) return null;

    return (
        <Card style={cardStyle}>
            <VuiTypography variant="lg" color="text" fontWeight="regular">
                Agregar nueva finanza
            </VuiTypography>

            <VuiBox display="flex" flexDirection="column" width="80%">
                <VuiBox display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" marginBottom="20px">
                    <div className='col'>
                        <VuiTypography variant="lg" color="text" fontWeight="regular">
                            Monto
                        </VuiTypography>
                        <VuiInput
                            label="Monto"
                            placeholder="Monto"
                            type="number"
                            value={ammount}
                            onChange={(e) => setAmmount(e.target.value)}
                            error={inputErrors[0]}
                            helperText={inputErrors[0] ? "El monto es requerido" : ""}
                        />
                    </div>
                    <div className='col'>
                        <VuiTypography variant="lg" color="text" fontWeight="regular">
                            Fecha
                        </VuiTypography>
                        <VuiInput
                            label="Date"
                            placeholder="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            error={inputErrors[1]}
                            helperText={inputErrors[1] ? "La fecha es requerida" : ""}
                        />
                    </div>
                </VuiBox>
            </VuiBox>

            <VuiBox display="flex" flexDirection="column" width="80%">
                <VuiTypography variant="lg" color="text" fontWeight="regular">
                    Descripción
                </VuiTypography>
                <VuiInput
                    label="Descripción"
                    placeholder="Descripción"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    error={inputErrors[1]}
                    helperText={inputErrors[2] ? "La descripcion es requerida" : ""}
                />
            </VuiBox>
            &nbsp;
            <VuiBox display="flex" flexDirection="column" width="80%">
                <VuiTypography variant="lg" color="text" fontWeight="regular">
                    Tipo
                </VuiTypography>
                <VuiBox display="flex">
                    <RadioGroup
                        row
                        aria-label="noteType"
                        name="noteType"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <VuiBox display="flex" flexDirection="row" >
                            <VuiBox
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                sx={{
                                    marginRight: "10px",
                                }}
                            >
                                <VuiInput
                                    type="radio"
                                    name="noteType"
                                    value="Ingreso"
                                    checked={type === "Ingreso"}
                                    onChange={(e) => setType(e.target.value)}
                                    error={inputErrors[3]}
                                    sx={{
                                        marginRight: "10px",
                                        borderColor: "rgba(0, 0, 0, 0)",
                                    }}
                                />
                                <VuiTypography variant="lg" color="success" fontWeight="regular">
                                    Ingreso
                                </VuiTypography>
                            </VuiBox>
                            <VuiBox display="flex" flexDirection="row" alignItems="center">
                                <VuiInput
                                    type="radio"
                                    name="noteType"
                                    value="Gasto"
                                    checked={type === "Egreso"}
                                    onChange={(e) => setType(e.target.value)}
                                    error={inputErrors[3]}
                                    sx={{
                                        marginRight: "10px",
                                        borderColor: "rgba(0, 0, 0, 0)",
                                    }}
                                />
                                <VuiTypography variant="lg" color="error" fontWeight="regular">
                                    Gasto
                                </VuiTypography>
                            </VuiBox>
                        </VuiBox>
                    </RadioGroup>
                </VuiBox>
                {inputErrors[3] && <VuiTypography color="error">Por favor seleccione el Tipo</VuiTypography>}

            </VuiBox>


            <VuiBox margin="10px" display="flex">
                <VuiButton onClick={onClose} style={{ margin: "10px" }} color="error">Cancelar</VuiButton>
                <VuiButton onClick={handleOnSave} style={{ margin: "10px" }} color="success">Guardar</VuiButton>
            </VuiBox>
        </Card>
    );
};

export default AddNoteCard;
