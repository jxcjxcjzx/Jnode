the dsl lib in explore dir 
===

the DSL, is something have little binding with language limits, which can be called a common language expression. 


what is this lib do ? 
--
here the potention of each language is explored, and better utiled, the tool use to parse languages is something like lex/yacc, still  working at this .


details 
--
some language binding could be like this :
	
	Miller-Rabin 素数检验算法
	(define (prime-iter n i)
		(cond ((=i n) #t)
			((==(remainder n i) 0) #f)
			(else (prime-iter n (+i 1)))))

	(define (prime? n))
		(prime-iter n 2)






attention 
-
move the common lib to system-lib later 


