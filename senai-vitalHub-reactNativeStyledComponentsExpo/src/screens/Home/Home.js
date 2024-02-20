import { StatusBar } from "react-native"
import { Container } from "../../components/Container/style"
import { Header } from "../../components/Header/Header"
import { CalendarHome } from "../../components/CalendarHome/CalendarHome"
import { FilterAppointment } from "./style"
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment"
import { useState } from "react"

import { ListComponent } from "../../components/List/List"
import { AppointamentCard, AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "realizado" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" }

]

export const Home = () => {

    const [statusLista, setStatusLista] = useState("pendente")

    return (
        <Container>

            <StatusBar />

            {/* Header */}
            <Header />

            {/* Calendar */}
            <CalendarHome />

            {/* Filtros (button) */}
            {/* Container */}



            <FilterAppointment>

                {/* Botoes agendado */}
                <AbsListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pentende")} />

                {/* Botoes realizado */}
                <AbsListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")} />

                {/* Botoes cancelado */}
                <AbsListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")} />


            </FilterAppointment>

            {/* Cards */}

            {/* <ListComponent
                data={Consultas}
                KeyExtractor={(item) => item.id}

                renderItem={({ item }) =>
                    statusLista == item.situacao && (
                        <AppointamentCard
                            situacao={item.situacao}
                        />

                    )
                }
            /> */}



            <AppointmentCard />

        </Container>

    )
}