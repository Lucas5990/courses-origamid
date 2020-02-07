export default {
    data(){
        return {
            tempo: ""
        }
    },
    created(){
        fetch('https://www.metaweather.com/api/location/455825/').then(res => res.json()).then(data => {this.tempo = data});
    },
    template: `
        <div>
            <p><b>Previsão do tempo:</b> {{tempo}}</p>
        </div>
    `
}