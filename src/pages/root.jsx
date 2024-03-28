import ChartPopup from "../components/chart-popup";
import ChartScatter from "../components/chart-scatter";
import Layout from "../components/layout";

export default function Root() {
    return (
        <Layout>
            <div id="detail">
                <ChartPopup />
            </div>
        </Layout>
    );
}