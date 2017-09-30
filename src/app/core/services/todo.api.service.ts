@Injectable()
export class TodoService {
    constructor(private http: Http) {}

    getTodos(): Observable<Hero[]> {
        return this.http.get('/api/todos')
        .map(res => res.json());
    }

    getTodo(id): Observable<Todo> {
        return this.http.get('/api/todo/' + id)
        .map(res => res.json());
    }

    saveTodo(todo) {
        if (todo.id === 0) {
            return this.http.post('/api/todo', todo)
            .map(res => res.json());
        } else {
            return this.http.put('/api/todo/' + todo.id, todo)
            .map(res => res.json());
        }
    }

    deleteTodo(todo) {
        return this.http.delete('/api/todo/' + todo.id)
        .map(res => todo);
    }
}