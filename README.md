***Problema:***
O Agro negócio é um setor importante para a economia de muitos países, um dos maiores desafios desse setor é aumentar a produção e maximizar a entrega aos clientes finais, reduzindo custo e aumentando a qualidade. Identificamos vários problemas enfrentados pelos agricultores nos dias de hoje, tais como:

_**1 - Uso Ineficiente de Recursos Naturais** - Aproximadamente 30% da água doce é usada na agricultura.  
**2 - Desmatamento** - Proveniente de desmatamento ilegal e clandestino.  
**3 - Mudanças Climáticas** - Aumento médio da temperatura de 1,2°C desde o século XIX. Eventos climáticos extremos afetam a produção agrícola.  
**4 - Infraestrutura Deficiente** - Falta de infraestrutura de transporte encarece a logística. Estradas ruins prejudicam o escoamento de produtos.  
**5 - Pesticidas e Agrotóxicos** - O uso excessivo pode impactar na saúde pública e no meio ambiente. Cerca de 20% de produção é perdido devido a controles ineficientes de pragas.  
**6 - Questões de Saúde Animal** - Surto de febre aftosa pode afetar a pecuária. Necessidade de medidas de prevenção e controle.  
**7 - Mercado Internacional** - Flutuações nos preços de commodities. Dependência de exportações agrícolas e pecuárias.  
**8 - Acesso à Tecnologia** - Disparidade na adoção de tecnologias agrícolas. Pequenos agricultores enfrentam dificuldades no acesso._ 

***Solução:***
Para resolver esses problemas, desenvolvemos um modelo de machine learning utilizando o Algoritmo da *Microsoft* de Inteligência Artificial Generativa que prevê a cultura a ser cultivada com base em variáveis como: Nitrogênio, fósforo, potássio, precipitação, temperatura, umidade e PH do solo. Analisamos mais de 2200 linhas de dados de cerca de 25 culturas e classificamos em grupos, treinando um modelo para prever qual cultura tem melhor produtividade. Desenvolvemos protótipo com módulos destinados a prever culturas, sugerir pesticidas e exibir o preço atual de mercado de lavoura. Interligamos o modelo de ML com um aplicativo usando bancos de dados em tempo real do Firebase.

***Implementação técnica:***
Dataset: 7 atributos – Nitrogênio, Fósforo, Potássio, Precipitação pluviométrica, temperatura, umidade e tipo de cultura, dos quais 6 atributos, exceto tipo de corte, são usados como entrada, o atributo tipo de corte é usado como destino de saída. O conjunto de dados é dividido em proporção 8:2, 80% é usado para treinamento e 20% é usado para testes. Usando android studio para desenvolver um aplicativo móvel com ferramenta kotlin e adicionado firebase para intercalar com modelo de ML para prever a produção e colheita.

***Resultado:***
 Após o treinamento do modelo, depois que o modelo foi testado sobre os dados do teste, obteve-se o precisão em torno de 98 por cento. Esse resultado comprova que o modelo vai diminuir as perdas sofridas pelos agricultores e aumentar a produção agrícola e garantir estabilidade nos preços.
 
***Caso de uso:***
Esta aplicação pode ser utilizada por qualquer agricultor que tenha acesso a um aparelho celular para verificar a melhor maneira de produzir e comercializar comodities além de melhorar o uso de agrotóxicos.