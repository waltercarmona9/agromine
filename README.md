***Problema***
A agricultura é um setor importante um dos maiores é aumentar a produção e a entrega aos clientes finais com baixo custo e boa qualidade. Depois de fazer algumas pesquisas na internet, ficamos sabendo que esses são Três grandes problemas enfrentados pelos agricultores nos dias de hoje.

**_Baixa produtividade da lavoura_** – porque a maioria desconhece o fato que a condição do solo e as condições climáticas podem mudar com o tempo.
**_Menos lucro ganho_** - Desconhecimento do preço de mercado atual
**_Perda por falta de conhecimento de quais agrotóxicos usar._**

***Solução***
Para resolver esses problemas, desenvolvemos um modelo de machine learning utilizando o Algoritmo da *Microsoft* Inteligência Artificial Generativa que prevê a cultura que deve ser cultivada com base em condições como: Nitrogênio, fósforo, potássio, precipitação, temperatura, umidade, PH e umidade como entrada. Analisamos mais de 2200 linhas de dados de cerca de 25 culturas e classificamos em grupos, treinaram um modelo para prever qual cultura tem melhor produtividade da cultura. Então nós desenvolvemos Aplicação Android como um protótipo que tem três módulos que são destinados a prever culturas, sugerir pesticidas para uma determinada cultura e exibir o preço atual de mercado de lavoura. Mais tarde, interligamos o modelo de ML com um aplicativo Android usando bancos de dados em tempo real do Firebase.

***Implementação técnica***
Dataset: 7 atributos – Nitrogênio, Fósforo, Potássio, Precipitação pluviométrica, temperatura, umidade e tipo de cultura. Dos quais 6 atributos, exceto tipo de corte, são usados como entrada e tipo de corte é usado como destino saída. O conjunto de dados é dividido em proporção 8:2, 80% é usado para treinamento e 20% é usado para testes. Usando android studio para desenvolver um aplicativo móvel com ferramenta kotlin e adicionado firebase para intercalar com modelo de ML para prever a produção e colheita.

***Resultado***
 Após o treinamento do modelo, quando o modelo foi testado sobre os dados do teste, obteve-se o precisão em torno de 98 por cento. Diminui as perdas sofridas pelos agricultores. Aumento da produção agrícola, diminuição do alimentos e outras comodities garantindo estabilidade nos preços.
 
***Caso de uso***
Esta aplicação pode ser utilizada por qualquer agricultor que tenha acesso aparelho celular. Para verificar a melhor safra, dicas além de melhorar o uso de agrotóxicos.