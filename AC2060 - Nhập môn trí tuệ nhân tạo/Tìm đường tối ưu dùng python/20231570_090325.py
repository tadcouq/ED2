import heapq

def a_star(graph, start, goal, h):
    # Hàng đợi ưu tiên của các nút cần thăm (f_score, node)
    open_set = [(h[start], start)]
    # Tập hợp để theo dõi các nút trong open set để tra cứu nhanh hơn
    open_set_hash = {start}
    
    # Từ điển để lưu trữ chi phí để đến mỗi nút từ điểm bắt đầu
    g_score = {node: float('inf') for node in graph}
    g_score[start] = 0
    
    # Từ điển để lưu trữ chi phí ước tính tổng từ điểm bắt đầu đến đích qua mỗi nút
    f_score = {node: float('inf') for node in graph}
    f_score[start] = h[start]
    
    # Từ điển để lưu trữ đường đi
    came_from = {}
    
    # Danh sách để lưu trữ các nút đã thăm theo thứ tự
    visited_nodes = []
    
    while open_set:
        # Lấy nút có f_score thấp nhất
        _, current = heapq.heappop(open_set)
        visited_nodes.append(current)
        
        if current in open_set_hash:
            open_set_hash.remove(current)
        
        # Nếu đã đến đích, tái tạo và trả về đường đi
        if current == goal:
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            path.reverse()
            return visited_nodes, path
        
        # Khám phá các nút lân cận
        for neighbor, cost in graph[current].items():
            # Tính toán g_score tạm thời
            tentative_g_score = g_score[current] + cost
            
            # Nếu tìm thấy đường tốt hơn đến nút lân cận
            if tentative_g_score < g_score[neighbor]:
                # Cập nhật đường đi và các điểm số
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g_score
                f_score[neighbor] = tentative_g_score + h[neighbor]
                
                # Thêm vào open set nếu chưa có
                if neighbor not in open_set_hash:
                    heapq.heappush(open_set, (f_score[neighbor], neighbor))
                    open_set_hash.add(neighbor)
    
    # Nếu không tìm thấy đường đi
    return visited_nodes, None

# Định nghĩa đồ thị từ hình 
graph = {
    'S': {'A': 100, 'B': 3, 'F': 4, 'E': 14},
    'A': {'S': 100, 'C': 4},
    'B': {'S': 3, 'D': 4},
    'C': {'A': 4, 'I': 50},
    'D': {'B': 4, 'I': 50},
    'E': {'S': 14, 'H': 16},
    'F': {'S': 4, 'H': 16},
    'H': {'E': 16, 'F': 16, 'I': 30},
    'I': {'C': 50, 'D': 50, 'H': 30, 'G': 10},
    'G': {'I': 10}
}

# Giá trị heuristic h(x) từ hình 
h = {
    'S': 0,
    'A': 60,
    'B': 50,
    'C': 55,
    'D': 50,
    'E': 56,
    'F': 50,
    'H': 39,
    'I': 0,
    'G': 0
}

# Giải quyết vấn đề
visited_nodes, optimal_path = a_star(graph, 'S', 'G', h)

# In kết quả
print("Danh sach (co thu tu) cac nut duoc tham:")
print(", ".join(visited_nodes))

print("\nDuong di toi uu tu S den G:")
if optimal_path:
    path_str = "(" + ", ".join(optimal_path) + ")"
    print(path_str)
else:
    print("Khong tim thay duong di!")