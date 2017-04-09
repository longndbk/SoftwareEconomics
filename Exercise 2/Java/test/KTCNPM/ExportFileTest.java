/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package KTCNPM;

import java.util.ArrayList;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author haibn
 */
public class ExportFileTest {
    
    public ExportFileTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of exportFile method, of class ExportFile.
     */
    @Test
    public void testExportFile() throws Exception {
        System.out.println("exportFile");
        ArrayList<String> list = null;
        ArrayList<String> listTAW = null;
        ArrayList<String> listTBF = null;
        ArrayList<String> listTCF = null;
        ArrayList<String> listEF = null;
        ArrayList<String> listG = null;
        ExportFile instance = new ExportFile();
        instance.exportFile(list, listTAW, listTBF, listTCF, listEF, listG);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
