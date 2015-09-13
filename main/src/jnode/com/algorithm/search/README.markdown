the search dir in algorithm dir 
===

provides mainly the searching ability. 

how is the functionality constructed? 
--

refs comes from 全文搜索引擎，（具体名称忘记鸟，后面查了补上）。
sample codes are listed as following :  

	List<Document> documents = new ArrayList<Document>();
	DirectoryReader irreader = DirectoryReader.open(directory);
	IndexSearcher isearch = new IndexSearcher(irreader);
	// parse a simple query 
	QueryParser parser = new QueryParser(Version.xxx,filename,analyzer);
	Query query = parser.parse(value); // value就是要查询的词语, 可以是很简单的词，也可以是构成复杂的查询的句子
	ScoreDoc[] hits = isearcher.search(query,null,1000).scoreDocs;
	// 循环查找
	for(xxx){
		... 
	}
	closeall...

