def count_end_positions(filename):
    pos = 50
    count = 0
    with open(filename, 'r') as f:
        for line in f:
            s = line.strip()
            if not s: 
                continue
            if s[0] not in ('R','L') or not s[1:].lstrip('-').isdigit():
                continue
            dirc = s[0]
            n = int(s[1:])
            if dirc == 'R':
                pos = (pos + n) % 100
            else:
                pos = (pos - n) % 100
            if pos == 0:
                count += 1
    return count

def count_all_clicks(filename):
    pos = 50
    total_hits = 0
    with open(filename, 'r') as f:
        for line in f:
            s = line.strip()
            if not s:
                continue
            if s[0] not in ('R','L') or not s[1:].lstrip('-').isdigit():
                continue
            dirc = s[0]
            n = int(s[1:])
            if n <= 0:
                pass

            if dirc == 'R':
                first_k = (100 - (pos % 100)) % 100
                if first_k == 0:
                    first_k = 100
            else:
                first_k = pos % 100
                if first_k == 0:
                    first_k = 100

            if n >= first_k:
                hits = 1 + (n - first_k) // 100
            else:
                hits = 0

            total_hits += hits

            if dirc == 'R':
                pos = (pos + n) % 100
            else:
                pos = (pos - n) % 100

    return total_hits

if __name__ == '__main__':
    fname = 'moves.txt'
    p1 = count_end_positions(fname)
    p2 = count_all_clicks(fname)
    print("Part 1 (end-of-rotation hits):", p1)
    print("Part 2 (any click hits, method 0x434C49434B):", p2)