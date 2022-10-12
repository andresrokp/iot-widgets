function mapCustomActionState(widgetContext,entityId,entityName){
    var $injector = widgetContext.$scope.$injector;

    console.log("widgetContext ~~ ", widgetContext)
    console.log("$injector ~~", $injector)
    console.log("entityId ~~", entityId)
    console.log("entityName ~~", entityName)

    $injector.get(widgetContext.servicesMap.get('assetService')).getAsset(entityId.id).subscribe(function(asset) 
    {
            console.log(asset);
            
            if (asset.name == 'Terminal de Carga') 
            {
                openDashboardState('terminal_de_carga');
            }
            else if(asset.name == 'pareceElTaller') 
            {
                openDashboardState('datos_vehiculo');
            }
            else if(asset.name == 'Puente Aereo') 
            {
                openDashboardState('puente_aereo');
            }
    });

    function openDashboardState(stateId) 
    {
        var params = 
        {
            entityId: entityId,
            entityName: entityName
        }
        widgetContext.stateController.openState(stateId, params,false);
    }
}


