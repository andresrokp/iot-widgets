function mapCustomActionState(widgetContext,entityId,entityName){
    var $injector = widgetContext.$scope.$injector;

    console.log("widgetContext ~~ ", widgetContext)
    console.log("$injector ~~", $injector)
    console.log("")

    $injector.get(widgetContext.servicesMap.get('assetService')).getAsset(entityId.id).subscribe(function(device) 
    {
            openDashboardState('terminal_de_carga')
    //         if (device.type == 'zonaAeropuerto') 
    // 		{
    //             openDashboardState('terminal_de_carga')
    //         }
    //         else if(device.type == 'water sensor') 
    // 		{
    //             openDashboardState('water_state')
    //         }
    //         else 
    // 		{
    //             openDashboardState('temperature_state')
    //         }
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


