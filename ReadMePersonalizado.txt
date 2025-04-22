Este es una guia basica que voy a air actualizando con pasos o cosas importantes a tener en cuenta para trabajar la tarea.

Lo primero, es que para crearla se realizo el siguiente proceso:
    
    --Intalacion de node y angular CLI
    1.Se instala node js (Ya se intalo en clases)
    2.Se instala el npm (Ya se instalo en clase)
    3.Se instala el CLI de Angular eso es poniendo en la consola de comandos (npm install -g @angular/cli)
    4.Se verficica usando (hg version)
    5.Se instala la extencion en visual (Angular Language Service, igual me funciono sin esto, pero mejor instalen por aquello)
    
    ----Creacion del proyecto en si 
    6.Se utiliza el siguiente comando en la carpeta donde se quiera crear el proyecto
        (ng new nombre-separado-por-comas)
        -Les pregunta que quieren usar para los estilos, lo normal es escoger el css, la segunda de que si usan routes o ruteo le dicen que si, es para cuando hay ams de una pagina en el proyecto.
    7.Despues usan (cd nombre-del-proyecto), esto para entrar a la carpeta que se creo que tiene el proyecto.
    ----Iniciar el proyecto
    8.Se ejecuta el comando (ng serve), esto les va a abrir el navegador predeterminado que tengan, y les muestra la pantalla que este para mostrar primera por defecto.
