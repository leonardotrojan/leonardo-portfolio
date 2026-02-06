import IconContainer from "./habilities/icon-container";

const HabilitiesSection = () => {
    return ( 
        <div id="skills" className="min-h-screen scroll-mt-24">
            <h1 className="text-center text-3xl mb-12 font-bold">Minhas <span className="text-purple-700">habilidades</span></h1>
            <div className="flex items-center justify-center">
                <div className="m-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    <IconContainer technology="frontend" icone="globe"/>
                    <IconContainer technology="backend" icone="server"/>
                    <IconContainer technology="banco" icone="database"/>
                    <IconContainer technology="ferramentas" icone="wrench"/>
                </div>
            </div>
        </div>
     );
}
 
export default HabilitiesSection;