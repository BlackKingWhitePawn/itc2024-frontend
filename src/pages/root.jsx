import { useEffect } from "react";
import ChartPopup from "../components/chart-popup";
import ChartScatter from "../components/chart-scatter";
import Layout from "../components/layout";
import { redirect, useNavigate } from "react-router";

export default function Root() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/map");
    });

    return (
        <Layout>
            <div id="detail">
                <ChartPopup />
            </div>
        </Layout>
    );
}