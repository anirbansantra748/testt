import java.util.logging.Logger;

public class a {
    private static final Logger logger = Logger.getLogger(a.class.getName());

    public static void main(String args) {
        // Using logger instead of System.out.println for better logging practices
        logger.info("Hello, World!"); // Fixed missing semicolon
    }
}