Для запуска программного продукта (ПП), необходимо:
- на ОС Windows:
    - установить программу для запуска локального сервера OpenServer,  версии 5.30 или выше;
    - переместить папку с проектом в папку локального сервера "domains" или "domains/localhost";
    - запустить локальный сервер OpenServer;
    - открыть браузер, в адресной строке прописать путь к проекту, если проект был перемещён в папку "domains", то необходимо указать - "название_папки_проекта"; если проект перемещён в папку "domains/localhost", то необходимо прописать - "localhost/имя_папки проекта";
    - работать с открывшимся проектом;
- на ОС Linux:
    - установить локальный сервер LAMP;
    - переместить проект в папку "/var/www/название_папки_локального_сервера";
    - запустить в терминале локальный сервер вместе с базой данных - "service aapche2 start && service mysql start";
    - открыть браузер, в адресной строке прописать путь к проекту - "localhost/имя_папки проекта";
    - работать с открывшимся проектом;
