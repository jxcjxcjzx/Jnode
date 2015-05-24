import web 


def add_movie(movie):
	movie = json.load(data)
	db.insert('movie',id=int(movie['id']),title=movie['title'],directors = ','.join([d['name'] for d in movie['directors']])......)


db = web.database(dbn='sqlite',db='movieSite.db')



	